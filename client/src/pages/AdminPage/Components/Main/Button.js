export const Button = ({ type, nameClass, text }) => {
    return (
        <button type={type} className={nameClass}>
            {text}
        </button>
    );
};
