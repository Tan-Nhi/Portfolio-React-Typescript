
interface IProps {
    btnText?: string;
    btnIcons?: React.ReactNode;
    btnStyle?: React.CSSProperties;
    onCLick?: () => void;
}

const ResizeButton = (props: IProps) => {
    const { btnText, btnIcons, btnStyle, onCLick } = props;

    return (
        <button
            onClick={onCLick}
            className="resize-button" style={btnStyle}>
            <span style={{ textTransform: "uppercase" }}>{btnText}</span>
            <>{btnIcons}</>
        </button>
    )
}

export default ResizeButton;