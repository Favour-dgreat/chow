import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Define the types for document data
type DocumentItem = {
    name: string;
    iconType: 'fontawesome';
    icon: IconDefinition;
    url: string; // Add a URL field to each document item
} | {
    name: string;
    iconType: 'image';
    icon: string;
    url: string; // Add a URL field to each document item
};

const doc_data: DocumentItem[] = [
    { name: "X", iconType: "image", icon: "/assets/img/images/twitter.png", url: "https://x.com/chowchowcn" },
    { name: "Telegram", iconType: "image", icon: "/assets/img/images/telegram.png", url: "https://t.me/chowchoweth" },
    { name: "Coin Market Cap", iconType: "image", icon: "/assets/img/images/coinmarketcap.png", url: "#" },
    { name: "Coin Gecko", iconType: "image", icon: "/assets/img/images/coingecko.png", url: "#" }, // Example for image icon
];

const doc_data1: DocumentItem[] = [
    { name: "Dex tools", iconType: "image", icon: "/assets/img/images/dextoolslogo.png", url: "#" },
    { name: "Dex Screener", iconType: "image", icon: "/assets/img/images/dexcreener.jpeg", url: "#" },
    { name: "Uniswap", iconType: "image", icon: "/assets/img/images/uniswap.jpeg", url: "#" },
];

const DocumentList = ({ documents }: { documents: DocumentItem[] }) => (
    <ul className="list-wrap">
        {documents.map((doc, i) => (
            <li key={i}>
                <a href={doc.url} target="_blank" rel="noopener noreferrer"> {/* Use an anchor tag with the URL */}
                    <span className="icon">
                        {doc.iconType === "fontawesome" ? (
                            <FontAwesomeIcon icon={doc.icon} />
                        ) : (
                            <img src={doc.icon} alt={`${doc.name} icon`} style={{ width: '50px', height: '50px' }} />
                        )}
                    </span>
                    {doc.name}
                </a>
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
