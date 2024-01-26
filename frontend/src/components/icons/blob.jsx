import "./blob.scss";

function Blob() {
    return (
        <>
            <div className="blob__container">
                <svg
                    className="IMG__blob"
                    viewBox="0 0 200 200"
                    height="750"
                    width="750"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <clipPath id="blobClipPath">
                            <path
                                fill="#FF0066"
                                d="M52,-64.6C62.6,-53,63.3,-32.1,65.4,-12.7C67.4,6.8,70.8,24.8,63.9,37.1C57,49.4,39.9,55.9,22.3,63.1C4.6,70.4,-13.4,78.4,-30,75.4C-46.6,72.4,-61.7,58.4,-69.4,41.7C-77.1,25,-77.4,5.6,-71.7,-10.2C-66,-26,-54.2,-38.4,-41.3,-49.6C-28.4,-60.8,-14.2,-70.9,3.2,-74.8C20.7,-78.6,41.3,-76.2,52,-64.6Z"
                                transform="translate(100 100)"
                            />
                        </clipPath>
                    </defs>
                    <image
                        xlinkHref="LinuxUserImage.jpeg"
                        clipPath="url(#blobClipPath)"
                        height="100%"
                        width="100%"
                    />
                </svg>
            </div>
        </>
    );
}

export default Blob;
