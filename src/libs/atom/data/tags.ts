import { TagType } from '@/libs/types';
import { atom } from 'jotai';

const tagsAtom = atom<TagType[]>([]);

export { tagsAtom };
