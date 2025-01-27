import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function EditPlaylist() {
  const location = useLocation();
  const navigate = useNavigate();
  const { playlist } = location.state || {};
  const [playlistName, setPlaylistName] = useState(playlist?.name || '');
  const [playlistUrl, setPlaylistUrl] = useState(playlist?.url || '');
  const [isProtected, setIsProtected] = useState(playlist?.isProtected || false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { t } = useTranslation();  

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError('');

    if (isProtected && !password) {
      setError('Password is required for protected playlists');
      return;
    }

    try {
      const response = await fetch(`https://wish-4a54.onrender.com/playList/update/${playlist._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `wisOZ0${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify({        
          name: playlistName,
          url: playlistUrl,
          isProtected,
          ...(isProtected && { password }),
        }),
      });
  
      if (response.ok) {
        navigate('/manageplaylist');
      } else {
        const result = await response.json();
        setError(result.message || t('EditErrorMessageOne'));
      }
    } catch (error) {
      console.error(t("EditErrorMessageTwo"), error);
      setError(t('EditErrorMessageThree'));
    }
  };

  return (
    <form onSubmit={handleUpdate} className="max-w-lg w-full">
      <h1 className="text-[#3C3C3C] text-3xl font-bold mb-5">{t('EditPlaylist')}</h1>
      
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <div className="mb-5">
        <label htmlFor="playlist-name" className="block mb-2 text-sm font-medium text-gray-900">
          {t('PlaylistNameOne')}
        </label>
        <input
          type="text"
          id="playlist-name"
          className="bg-[#F5F5F5] border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="playlist-url" className="block mb-2 text-sm font-medium text-gray-900">
          {t('PlaylistURLOne')}
        </label>
        <input
          type="text"
          id="playlist-url"
          className="bg-[#F5F5F5] border-0 text-[#696CD6] text-sm rounded-lg block w-full p-2.5"
          value={playlistUrl}
          onChange={(e) => setPlaylistUrl(e.target.value)}
          required
        />
      </div>

      <div className="mb-5">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isProtected}
            onChange={(e) => setIsProtected(e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C067C8]"></div>
          <span className="ms-3 text-sm font-medium text-gray-700">Protected Playlist</span>
        </label>
        <div><span className='text-red-600'>NOTE:</span> Protected playlists will not be viewed or modified without entering PIN</div>
      </div>

      {isProtected && (
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
            {t('PasswordOne')}
          </label>
          <input
            type="password"
            id="password"
            className="bg-[#F5F5F5] border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t("EnterpasswordOne")}
          />
        </div>
      )}

      <center>
        <button 
          type="submit" 
          className="text-white bg-[#C067C8] font-medium rounded-lg text-sm w-[205px] py-2.5 hover:bg-[#C067C8]/90"
        >
          {t('SaveChanges')}
        </button>
      </center>
    </form>
  );
}

