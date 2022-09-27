import { atom } from "jotai";

type TaskAtom = {
    id:number,
    title:string,
    body:string,
    color:string
}

type Theme = 'light' | 'dark'

const taskAtoms = atom<TaskAtom[]>([])
const theme = atom<Theme>('light')
const deleteMode = atom<boolean>(false)

export { taskAtoms, theme, deleteMode }