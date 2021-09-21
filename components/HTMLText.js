import ReactMarkdown from "react-markdown";

// type Props = {
//   text: string
//   className?: string
//   fontStyle?: string
// }

const HTMLText = ({ text, className = "my-2 ", fontStyle = " " }) => {
  return (
    <div className={`markdown customList ${fontStyle} ${className}`}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

export default HTMLText;
