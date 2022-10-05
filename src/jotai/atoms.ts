import { atom } from "jotai";
import AsyncStorage from '@react-native-async-storage/async-storage';

type TaskAtom = {
    id:number,
    title:string,
    body:string,
    color:string
}

type Theme = 'light' | 'dark'

const atomWithAsyncStorage = (key:string, initialValue:any) => {
    const baseAtom = atom(initialValue)
    baseAtom.onMount = (setValue) => {
      ;(async () => {
        const item = await AsyncStorage.getItem(key)
        setValue(JSON.parse(item || '[]'))
      })()
    }
    const derivedAtom = atom(
      (get) => get(baseAtom),
      (get, set, update) => {
        const nextValue =
          typeof update === 'function' ? update(get(baseAtom)) : update
        set(baseAtom, nextValue)
        AsyncStorage.setItem(key, JSON.stringify(nextValue))
      }
    )
    return derivedAtom
}

const taskAtoms = atomWithAsyncStorage('tasks',[])
const theme = atomWithAsyncStorage('theme','light')
const deleteMode = atom(false)

export { taskAtoms, theme, deleteMode }