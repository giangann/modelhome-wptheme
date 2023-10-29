import { atom } from 'jotai';

import { TagType } from '@/libs/types';

const tagsAtom = atom<TagType[]>([]);

export { tagsAtom };
