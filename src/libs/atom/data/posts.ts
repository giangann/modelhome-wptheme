import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { PostType } from '@/libs/types';

const postsAtom = atomWithStorage<{ [key: number]: PostType }>('list-post', []);

export { postsAtom };
