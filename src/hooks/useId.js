import { useId } from "react"

const useuniqeId = () => {
    const id = useId()
    return id;


}

export default useuniqeId;