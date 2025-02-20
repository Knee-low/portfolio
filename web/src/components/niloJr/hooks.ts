export const useHooks = () => {
    const handleButtonClick = () => {
        alert('Im being clicked!')
    }

    return { handleButtonClick };
}