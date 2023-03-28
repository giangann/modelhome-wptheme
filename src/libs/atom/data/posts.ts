import { PostType } from '@/libs/types';
import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const postsAtom = atomWithStorage<{ [key: number]: PostType }>('list-post', []);

export { postsAtom };
