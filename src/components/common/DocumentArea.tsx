import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFileContract, faFilePowerpoint } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Define the types for document data
type DocumentItem = {
    name: string;
    iconType: 'fontawesome';
    icon: IconDefinition;
} | {
    name: string;
    iconType: 'image';
    icon: string;
};

const doc_data: DocumentItem[] = [
    { name: "X", iconType: "fontawesome", icon: faFileAlt },
    { name: "Telegram", iconType: "fontawesome", icon: faFileContract },
    { name: "Coin Market Cap", iconType: "fontawesome", icon: faFilePowerpoint },
    { name: "Coin Gecko", iconType: "image", icon: "/assets/img/images/tt.jpg" }, // Example for image icon
];

const doc_data1: DocumentItem[] = [
    { name: "Dex tools", iconType: "fontawesome", icon: faFileAlt },
    { name: "Dex fiat", iconType: "fontawesome", icon: faFileContract },
    { name: "Susiswap", iconType: "fontawesome", icon: faFilePowerpoint },
];

const DocumentList = ({ documents }: { documents: DocumentItem[] }) => (
    <ul className="list-wrap">
        {documents.map((doc, i) => (
            <li key={i}>
                <Link to="#">
                    <span className="icon">
                        {doc.iconType === "fontawesome" ? (
                            <FontAwesomeIcon icon={doc.icon} />
                        ) : (
                            <img src={doc.icon} alt={`${doc.name} icon`} style={{ width: '20px', height: '20px', color: "white" }} />
                        )}
                    </span>
                    {doc.name}
                </Link>
            </li>
        ))}
    </ul>
);

const DocumentArea = () => {
    return (
        <section className="document-area">
            <div className="container">
                <div className="document-inner-wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="document-wrap">
                                {/* Render the first document list */}
                                <DocumentList documents={doc_data} />
                                
                                {/* Render the second document list */}
                                <DocumentList documents={doc_data1} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="document-shape">
                <img src="/assets/img/images/document_shape.png" alt="" className="alltuchtopdown" />
            </div>
        </section>
    );
}

export default DocumentArea;
