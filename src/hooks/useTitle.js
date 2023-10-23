import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Dr. Bean`;
    }, [title])
}

export default useTitle;