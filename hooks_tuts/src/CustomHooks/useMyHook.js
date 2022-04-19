import { useEffect } from 'react'

const useMyHook = (count) => {
    useEffect(() => {
        (count == 0) ? document.title = `Chats` : document.title = `Chats ${count}`;
    });
}

export default useMyHook;