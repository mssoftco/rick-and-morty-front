import { useEffect } from 'react';
import cookies from 'js-cookie';
import { FAVORITE_KEY } from '@/constants/defaults';
import { useAtom } from 'jotai';
import { favoriteCharacterAtom } from '../atoms/cookie';

export function useFavoriteCharacter() {
  const [favoriteName, setValue] = useAtom(favoriteCharacterAtom);

  function setFavoriteName(value: string) {
    cookies.set(FAVORITE_KEY, value, { expires: 365, secure: true, path: '/', sameSite: 'lax' });
    setValue(value);
  }

  function removeFavoriteName() {
    cookies.remove(FAVORITE_KEY);
    setValue('');
  }

  useEffect(() => {
    const name = cookies.get(FAVORITE_KEY);
    setValue(name);
  }, []);

  return { favoriteName, setFavoriteName, removeFavoriteName };
}
