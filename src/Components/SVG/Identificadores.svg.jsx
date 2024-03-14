import React from 'react';

export const MachoGrandeSVG = ({ text, uploadedFile, initialNumber, typeRecording }) => (
    <svg width="1448" height="2089" viewBox="0 0 1448 2089" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M176.212 2088.17C46.7445 2081.49 2.72556 2050.03 0 1928.13V1105.05C386.561 834.458 517.973 617.795 513.312 106.696H727.831V1105.05V2088.17H176.212Z" fill="#1A95D3" />
        <path d="M1271.79 2088.17C1401.26 2081.49 1445.27 2050.03 1448 1928.13V1105.05C1061.44 834.458 930.027 617.795 934.688 106.696H720.169V1105.05V2088.17H1271.79Z" fill="#1A95D3" />
        <g filter="url(#filter0_d_2058_940)">
            <circle cx="731.631" cy="289.6" r="289.6" fill="#1A95D3" />
        </g>
        <g filter="url(#filter1_d_2058_940)">
            <circle cx="731.631" cy="289.6" r="259.116" fill="#1A95D3" />
        </g>
        <g filter="url(#filter2_d_2058_940)">
            <circle cx="731.632" cy="289.6" r="76.2105" fill="url(#paint0_angular_2058_940)" />
        </g>
        {typeRecording != '' && typeRecording != 5 && typeRecording == 4 && (
            <>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="96">
                    {text}
                </text>
                <text x="50%" y="91%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="280">
                    {initialNumber}
                </text>
                {uploadedFile && (
                    <image
                        x="35%"
                        y="60%"
                        width="500px"
                        height="500px"
                        xlinkHref={uploadedFile}
                    />
                )}
            </>
        )}
        <defs>
            <filter id="filter0_d_2058_940" x="438.031" y="0" width="587.203" height="587.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_940" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_940" result="shape" />
            </filter>
            <filter id="filter1_d_2058_940" x="468.516" y="30.4844" width="526.234" height="526.231" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_940" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_940" result="shape" />
            </filter>
            <filter id="filter2_d_2058_940" x="651.422" y="213.39" width="160.422" height="160.421" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_940" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_940" result="shape" />
            </filter>
            <radialGradient id="paint0_angular_2058_940" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.632 289.6) rotate(40.6013) scale(70.2627)">
                <stop offset="0.095" stop-color="#0B0C0B" />
                <stop offset="0.525" stop-color="#656566" />
                <stop offset="0.73" stop-color="#F2F2F0" />
            </radialGradient>
        </defs>
    </svg>

);

export const MachoMaxiSVG = ({ text, uploadedFile, initialNumber, typeRecording }) => (
    <svg width="1448" height="2252" viewBox="0 0 1448 2252" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M175.294 2251.66C46.501 2245.01 2.71137 2213.71 0 2092.45L7.54318 1084.13C392.091 814.941 522.818 599.407 518.181 90.9707H731.582V1084.13L724.039 2251.66H175.294Z" fill="#1A95D3" />
        <path d="M1272.71 2251.66C1401.5 2245.01 1445.29 2213.71 1448 2092.45L1448 1084.13C1063.45 814.941 932.725 599.407 937.362 90.9707H723.961V1084.13L723.961 2251.66H1272.71Z" fill="#1A95D3" />
        <g filter="url(#filter0_d_2058_943)">
            <circle cx="727.865" cy="288.091" r="288.091" fill="#1A95D3" />
        </g>
        <g filter="url(#filter1_d_2058_943)">
            <circle cx="727.868" cy="288.091" r="257.766" fill="#1A95D3" />
        </g>
        <g filter="url(#filter2_d_2058_943)">
            <circle cx="727.868" cy="288.092" r="75.8135" fill="url(#paint0_angular_2058_943)" />
        </g>
        {typeRecording != '' && typeRecording != 5 && typeRecording == 4 && (
            <>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="96">
                    {text}
                </text>
                <text x="50%" y="91%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="280">
                    {initialNumber}
                </text>
                {uploadedFile && (
                    <image
                        x="35%"
                        y="60%"
                        width="500px"
                        height="500px"
                        xlinkHref={uploadedFile}
                    />
                )}
            </>
        )}
        <defs>
            <filter id="filter0_d_2058_943" x="435.773" y="0" width="584.18" height="584.183" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_943" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_943" result="shape" />
            </filter>
            <filter id="filter1_d_2058_943" x="466.102" y="30.3252" width="523.531" height="523.532" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_943" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_943" result="shape" />
            </filter>
            <filter id="filter2_d_2058_943" x="648.055" y="212.278" width="159.625" height="159.627" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_943" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_943" result="shape" />
            </filter>
            <radialGradient id="paint0_angular_2058_943" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(727.868 288.092) rotate(40.6013) scale(69.8966)">
                <stop offset="0.095" stop-color="#0B0C0B" />
                <stop offset="0.525" stop-color="#656566" />
                <stop offset="0.73" stop-color="#F2F2F0" />
            </radialGradient>
        </defs>
    </svg>

);

export const MachoMedioSVG = ({ text, uploadedFile, initialNumber, typeRecording }) => (
    <svg width="1448" height="1563" viewBox="0 0 1448 1563" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M176.212 1562.32C46.7445 1555.63 2.72556 1524.17 0 1402.27V1105.05C386.561 834.456 517.973 617.793 513.312 106.694H727.831V1105.05V1562.32H176.212Z" fill="#1A95D3" />
        <path d="M1271.79 1562.32C1401.26 1555.63 1445.27 1524.17 1448 1402.27V1105.05C1061.44 834.456 930.027 617.793 934.688 106.694H720.169V1105.05V1562.32H1271.79Z" fill="#1A95D3" />
        <g filter="url(#filter0_d_2058_937)">
            <circle cx="731.623" cy="289.6" r="289.6" fill="#1A95D3" />
        </g>
        <g filter="url(#filter1_d_2058_937)">
            <circle cx="731.624" cy="289.6" r="259.116" fill="#1A95D3" />
        </g>
        <g filter="url(#filter2_d_2058_937)">
            <circle cx="731.625" cy="289.6" r="76.2105" fill="url(#paint0_angular_2058_937)" />
        </g>
        {typeRecording != '' && typeRecording != 5 && typeRecording == 4 && (
            <>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="96">
                    {text}
                </text>
                <text x="50%" y="91%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="280">
                    {initialNumber}
                </text>
                {uploadedFile && (
                    <image
                        x="42%"
                        y="62%"
                        width="280px"
                        height="280px"
                        xlinkHref={uploadedFile}
                    />
                )}
            </>
        )}
        <defs>
            <filter id="filter0_d_2058_937" x="438.023" y="0" width="587.203" height="587.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_937" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_937" result="shape" />
            </filter>
            <filter id="filter1_d_2058_937" x="468.508" y="30.4844" width="526.234" height="526.231" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_937" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_937" result="shape" />
            </filter>
            <filter id="filter2_d_2058_937" x="651.414" y="213.39" width="160.422" height="160.421" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_937" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_937" result="shape" />
            </filter>
            <radialGradient id="paint0_angular_2058_937" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.625 289.6) rotate(40.6013) scale(70.2626)">
                <stop offset="0.095" stop-color="#0B0C0B" />
                <stop offset="0.525" stop-color="#656566" />
                <stop offset="0.73" stop-color="#F2F2F0" />
            </radialGradient>
        </defs>
    </svg>

);

export const MachoOvinoCaprinoSVG = ({ text, uploadedFile, initialNumber, typeRecording }) => (
    <svg width="1448" height="1357" viewBox="0 0 1448 1357" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M724 0V1021.22V1356.55H76.2105C21.3389 1338.26 2.54035 1293.04 0 1272.72V1021.22L724 0Z" fill="#1A95D3" />
        <path d="M724 0V1021.22V1356.55H1371.79C1426.66 1338.26 1445.46 1293.04 1448 1272.72V1021.22L724 0Z" fill="#1A95D3" />
        <g filter="url(#filter0_d_2058_946)">
            <circle cx="731.623" cy="289.6" r="289.6" fill="#1A95D3" />
        </g>
        <g filter="url(#filter1_d_2058_946)">
            <circle cx="731.624" cy="289.6" r="259.116" fill="#1A95D3" />
        </g>
        <g filter="url(#filter2_d_2058_946)">
            <circle cx="731.625" cy="289.6" r="76.2105" fill="url(#paint0_angular_2058_946)" />
        </g>
        {typeRecording != '' && typeRecording != 5 && typeRecording == 4 && (
            <>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="96">
                    {text}
                </text>
                <text x="50%" y="91%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="280">
                    {initialNumber}
                </text>
                {uploadedFile && (
                    <image
                        x="42%"
                        y="62%"
                        width="280px"
                        height="280px"
                        xlinkHref={uploadedFile}
                    />
                )}
            </>
        )}
        <defs>
            <filter id="filter0_d_2058_946" x="438.023" y="0" width="587.203" height="587.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_946" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_946" result="shape" />
            </filter>
            <filter id="filter1_d_2058_946" x="468.508" y="30.4844" width="526.234" height="526.231" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_946" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_946" result="shape" />
            </filter>
            <filter id="filter2_d_2058_946" x="651.414" y="213.39" width="160.422" height="160.421" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_946" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_946" result="shape" />
            </filter>
            <radialGradient id="paint0_angular_2058_946" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.625 289.6) rotate(40.6013) scale(70.2626)">
                <stop offset="0.095" stop-color="#0B0C0B" />
                <stop offset="0.525" stop-color="#656566" />
                <stop offset="0.73" stop-color="#F2F2F0" />
            </radialGradient>
        </defs>
    </svg>

);

export const MachoPequenoSVG = ({ text, initialNumber, typeRecording }) => (
    <svg width="587" height="587" viewBox="0 0 587 587" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_2058_936)">
            <circle cx="293.5" cy="289.5" r="289.5" fill="#1A95D3" />
        </g>
        <g filter="url(#filter1_d_2058_936)">
            <circle cx="293.503" cy="289.5" r="259.026" fill="#1A95D3" />
        </g>
        <g filter="url(#filter2_d_2058_936)">
            <circle cx="293.497" cy="289.5" r="76.1842" fill="url(#paint0_angular_2058_936)" />
        </g>
        {typeRecording != '' && typeRecording != 5 && typeRecording == 4 && (
            <>
                <text x="50%" y="20%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="45">
                    {text}
                </text>
                <text x="50%" y="83%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="90">
                    {initialNumber}
                </text>
            </>
        )}
        <defs>
            <filter id="filter0_d_2058_936" x="0" y="0" width="587" height="587" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_936" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_936" result="shape" />
            </filter>
            <filter id="filter1_d_2058_936" x="30.4766" y="30.4736" width="526.055" height="526.053" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_936" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_936" result="shape" />
            </filter>
            <filter id="filter2_d_2058_936" x="213.312" y="213.316" width="160.367" height="160.369" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_936" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_936" result="shape" />
            </filter>
            <radialGradient id="paint0_angular_2058_936" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(293.497 289.5) rotate(40.6013) scale(70.2384)">
                <stop offset="0.095" stop-color="#0B0C0B" />
                <stop offset="0.525" stop-color="#656566" />
                <stop offset="0.73" stop-color="#F2F2F0" />
            </radialGradient>
        </defs>
    </svg>
);

export const MachoTipTagSVG = ({ initialNumber, typeRecording }) => (
    <svg width="1448" height="409" viewBox="0 0 1448 409" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="749.555" y="221.463" width="698.447" height="187.388" rx="22" fill="#1A95D3" />
        <rect x="681.414" y="272.568" width="85.1764" height="68.1411" fill="#1A95D3" />
        <g filter="url(#filter0_d_2058_949)">
            <path d="M60.1484 133.758L142.423 111.713L184.309 268.033C190.396 290.753 176.914 314.105 154.194 320.193V320.193C131.475 326.281 108.122 312.798 102.034 290.079L60.1484 133.758Z" fill="#1A95D3" />
            <circle cx="104.94" cy="141.856" r="63.7462" transform="rotate(-20.9343 104.94 141.856)" fill="#1A95D3" />
            <path d="M59.5384 22.7764L145.265 92.359L42.1411 131.809L59.5384 22.7764Z" fill="#1A95D3" />
        </g>
        <circle cx="1354.3" cy="315.157" r="59.6235" fill="white" />
        <rect x="17.0391" y="221.463" width="698.447" height="187.388" rx="20" fill="#1A95D3" />
        {typeRecording != '' && typeRecording != 5 && (
            <>
                <text x="25%" y="80%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="180">
                    {initialNumber}
                </text>
            </>
        )}
        <defs>
            <filter id="filter0_d_2058_949" x="40.1797" y="22.7773" width="146.594" height="300.877" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_949" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_949" result="shape" />
            </filter>
        </defs>
    </svg>

);

export const FemEletHdxFdxSVG = ({ text, uploadedFile, typeRecording }) => (
    <svg width="687" height="688" viewBox="0 0 687 688" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_2058_1080)">
            <ellipse cx="343.5" cy="340" rx="339.5" ry="340" fill="#1A95D3" />
        </g>
        <g filter="url(#filter1_d_2058_1080)">
            <ellipse cx="343.498" cy="340" rx="303.763" ry="304.211" fill="#1A95D3" />
        </g>
        <g filter="url(#filter2_d_2058_1080)">
            <path d="M254.157 340C254.157 419.064 422.446 483.158 343.499 483.158C254.157 501.053 191.617 428.011 191.617 348.948C191.617 269.884 264.551 196.842 343.499 196.842C422.446 196.842 254.157 260.936 254.157 340Z" fill="#646464" />
        </g>
        <g filter="url(#filter3_d_2058_1080)">
            <ellipse cx="361.369" cy="340" rx="142.947" ry="143.158" fill="#0B0C0B" />
        </g>
        <g filter="url(#filter4_d_2058_1080)">
            <path d="M452 329.5C452 373.407 416.407 409 372.5 409C328.593 409 293 373.407 293 329.5C293 285.593 328.593 250 372.5 250C416.407 250 452 285.593 452 329.5Z" fill="white" />
        </g>
        {typeRecording != '' && typeRecording != 5 && (
            <>
                <text x="50%" y="15%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="45">
                    {text}
                </text>
                {uploadedFile && (
                    <image
                        x="42%"
                        y="72%"
                        width="120px"
                        height="120px"
                        xlinkHref={uploadedFile}
                    />
                )}
            </>
        )}
        <defs>
            <filter id="filter0_d_2058_1080" x="0" y="0" width="687" height="688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_1080" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_1080" result="shape" />
            </filter>
            <filter id="filter1_d_2058_1080" x="35.7344" y="35.7896" width="615.523" height="616.421" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_1080" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_1080" result="shape" />
            </filter>
            <filter id="filter2_d_2058_1080" x="187.617" y="196.842" width="180.953" height="297.043" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_1080" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_1080" result="shape" />
            </filter>
            <filter id="filter3_d_2058_1080" x="193.822" y="175.242" width="329.098" height="329.516" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-3" />
                <feGaussianBlur stdDeviation="10.8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_1080" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_1080" result="shape" />
            </filter>
            <filter id="filter4_d_2058_1080" x="268.4" y="228.4" width="202.2" height="202.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-3" />
                <feGaussianBlur stdDeviation="10.8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_1080" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_1080" result="shape" />
            </filter>
        </defs>
    </svg>

);

export const FemGrandeSVG = ({ text, uploadedFile, initialNumber, typeRecording }) => (
    <svg width="1456" height="2100" viewBox="0 0 1456 2100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M177.185 2099.71C47.0028 2092.99 2.74062 2061.36 0 1938.78V1111.16C388.697 839.072 520.835 621.212 516.148 107.289H731.852V1111.16V2099.71H177.185Z" fill="#1A95D3" />
        <path d="M1278.81 2099.71C1409 2092.99 1453.26 2061.36 1456 1938.78V1111.16C1067.3 839.072 935.165 621.212 939.852 107.289H724.148V1111.16V2099.71H1278.81Z" fill="#1A95D3" />
        <g filter="url(#filter0_d_2058_991)">
            <circle cx="735.708" cy="291.2" r="291.2" fill="#1A95D3" />
        </g>
        <g filter="url(#filter1_d_2058_991)">
            <circle cx="735.711" cy="291.2" r="260.547" fill="#1A95D3" />
        </g>
        <g filter="url(#filter2_d_2058_991)">
            <circle cx="735.709" cy="291.2" r="214.568" fill="#0B0C0B" />
        </g>
        <circle cx="735.704" cy="291.2" r="122.611" fill="black" />
        {typeRecording != '' && typeRecording != 5 && (
            <>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="96">
                    {text}
                </text>
                <text x="50%" y="91%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="280">
                    {initialNumber}
                </text>
                {uploadedFile && (
                    <image
                        x="35%"
                        y="60%"
                        width="500px"
                        height="500px"
                        xlinkHref={uploadedFile}
                    />
                )}
            </>
        )}
        <defs>
            <filter id="filter0_d_2058_991" x="440.508" y="0" width="590.398" height="590.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_991" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_991" result="shape" />
            </filter>
            <filter id="filter1_d_2058_991" x="471.164" y="30.6523" width="529.094" height="529.095" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_991" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_991" result="shape" />
            </filter>
            <filter id="filter2_d_2058_991" x="517.141" y="73.6318" width="437.141" height="437.137" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_991" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_991" result="shape" />
            </filter>
        </defs>
    </svg>
);

export const FemMaxiSVG = ({ text, uploadedFile, initialNumber, typeRecording }) => (
    <svg width="1464" height="2277" viewBox="0 0 1464 2277" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M177.231 2276.54C47.0148 2269.82 2.74133 2238.18 0 2115.57L7.62653 1096.11C396.423 823.95 528.595 606.034 523.907 91.9795H739.666V1096.11L732.04 2276.54H177.231Z" fill="#1A95D3" />
        <path d="M1286.77 2276.54C1416.99 2269.82 1461.26 2238.18 1464 2115.57L1464 1096.11C1075.2 823.95 943.031 606.034 947.719 91.9795H731.96V1096.11L731.96 2276.54H1286.77Z" fill="#1A95D3" />
        <g filter="url(#filter0_d_2058_988)">
            <circle cx="735.829" cy="291.275" r="291.275" fill="#1A95D3" />
        </g>
        <g filter="url(#filter1_d_2058_988)">
            <circle cx="735.833" cy="291.274" r="260.614" fill="#1A95D3" />
        </g>
        <g filter="url(#filter2_d_2058_988)">
            <circle cx="735.827" cy="291.275" r="214.623" fill="#0B0C0B" />
        </g>
        <circle cx="735.829" cy="291.275" r="122.642" fill="black" />
        {typeRecording != '' && typeRecording != 5 && (
            <>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="96">
                    {text}
                </text>
                <text x="50%" y="91%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="280">
                    {initialNumber}
                </text>
                {uploadedFile && (
                    <image
                        x="35%"
                        y="60%"
                        width="500px"
                        height="500px"
                        xlinkHref={uploadedFile}
                    />
                )}
            </>
        )}
        <defs>
            <filter id="filter0_d_2058_988" x="440.555" y="0" width="590.547" height="590.549" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_988" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_988" result="shape" />
            </filter>
            <filter id="filter1_d_2058_988" x="471.219" y="30.6602" width="529.227" height="529.229" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_988" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_988" result="shape" />
            </filter>
            <filter id="filter2_d_2058_988" x="517.203" y="73.6514" width="437.25" height="437.247" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_988" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_988" result="shape" />
            </filter>
        </defs>
    </svg>

);

export const FemMediaSVG = ({ text, uploadedFile, initialNumber, typeRecording }) => (
    <svg width="1449" height="1563" viewBox="0 0 1449 1563" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M176.218 1562.38C46.7463 1555.69 2.72567 1524.23 0 1402.33V1105.1C386.576 834.489 517.993 617.818 513.332 106.699H727.859V1105.1V1562.38H176.218Z" fill="#1A95D3" />
        <path d="M1271.84 1562.38C1401.31 1555.69 1445.33 1524.23 1448.06 1402.33V1105.1C1061.48 834.489 930.063 617.818 934.724 106.699H720.197V1105.1V1562.38H1271.84Z" fill="#1A95D3" />
        <g filter="url(#filter0_d_2058_994)">
            <circle cx="716.408" cy="289.611" r="289.611" fill="#1A95D3" />
        </g>
        <g filter="url(#filter1_d_2058_994)">
            <circle cx="716.407" cy="289.611" r="259.126" fill="#1A95D3" />
        </g>
        <g filter="url(#filter2_d_2058_994)">
            <circle cx="716.406" cy="289.612" r="213.398" fill="#0B0C0B" />
        </g>
        <circle cx="716.41" cy="289.611" r="121.942" fill="black" />
        {typeRecording != '' && typeRecording != 5 && (
            <>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="96">
                    {text}
                </text>
                <text x="50%" y="91%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="280">
                    {initialNumber}
                </text>
                {uploadedFile && (
                    <image
                        x="42%"
                        y="62%"
                        width="280px"
                        height="280px"
                        xlinkHref={uploadedFile}
                    />
                )}
            </>
        )}
        <defs>
            <filter id="filter0_d_2058_994" x="422.797" y="0" width="587.219" height="587.223" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_994" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_994" result="shape" />
            </filter>
            <filter id="filter1_d_2058_994" x="453.281" y="30.4854" width="526.25" height="526.252" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_994" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_994" result="shape" />
            </filter>
            <filter id="filter2_d_2058_994" x="499.008" y="73.2139" width="434.797" height="434.796" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_994" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_994" result="shape" />
            </filter>
        </defs>
    </svg>

);

export const FemOvinoCaprinoSVG = ({ text, uploadedFile, initialNumber, typeRecording }) => (
    <svg width="1468" height="1376" viewBox="0 0 1468 1376" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M734 0V1035.33V1375.28H77.2632C21.6337 1356.74 2.57544 1310.9 0 1290.29V1035.33L734 0Z" fill="#1A95D3" />
        <path d="M734 0V1035.33V1375.28H1390.74C1446.37 1356.74 1465.42 1310.9 1468 1290.29V1035.33L734 0Z" fill="#1A95D3" />
        <g filter="url(#filter0_d_2058_985)">
            <circle cx="741.725" cy="293.6" r="293.6" fill="#1A95D3" />
        </g>
        <g filter="url(#filter1_d_2058_985)">
            <circle cx="741.726" cy="293.6" r="262.695" fill="#1A95D3" />
        </g>
        <g filter="url(#filter2_d_2058_985)">
            <path d="M664.459 293.6C664.459 361.874 809.996 417.221 741.722 417.221C664.459 432.673 610.375 369.6 610.375 301.326C610.375 233.052 673.448 169.979 741.722 169.979C809.996 169.979 664.459 225.326 664.459 293.6Z" fill="#646464" />
        </g>
        <g filter="url(#filter3_d_2058_985)">
            <ellipse cx="757.176" cy="293.6" rx="123.621" ry="123.621" fill="#1A95D3" />
        </g>
        {typeRecording != '' && typeRecording != 5 && (
            <>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="96">
                    {text}
                </text>
                <text x="50%" y="91%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="280">
                    {initialNumber}
                </text>
                {uploadedFile && (
                    <image
                        x="42%"
                        y="62%"
                        width="280px"
                        height="280px"
                        xlinkHref={uploadedFile}
                    />
                )}
            </>
        )}
        <defs>
            <filter id="filter0_d_2058_985" x="444.125" y="0" width="595.203" height="595.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_985" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_985" result="shape" />
            </filter>
            <filter id="filter1_d_2058_985" x="475.031" y="30.9053" width="533.391" height="533.39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_985" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_985" result="shape" />
            </filter>
            <filter id="filter2_d_2058_985" x="606.375" y="169.979" width="157.57" height="257.598" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_985" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_985" result="shape" />
            </filter>
            <filter id="filter3_d_2058_985" x="608.955" y="148.379" width="290.442" height="290.442" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-3" />
                <feGaussianBlur stdDeviation="10.8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_985" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_985" result="shape" />
            </filter>
        </defs>
    </svg>

);

export const FemPequenaSVG = ({ text, initialNumber, typeRecording }) => (
    <svg width="687" height="688" viewBox="0 0 687 688" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_2058_981)">
            <ellipse cx="343.5" cy="340" rx="339.5" ry="340" fill="#1A95D3" />
        </g>
        <g filter="url(#filter1_d_2058_981)">
            <ellipse cx="343.498" cy="340" rx="303.763" ry="304.211" fill="#1A95D3" />
        </g>
        <g filter="url(#filter2_d_2058_981)">
            <path d="M254.157 340C254.157 419.064 422.446 483.158 343.499 483.158C254.157 501.053 191.617 428.011 191.617 348.948C191.617 269.884 264.551 196.842 343.499 196.842C422.446 196.842 254.157 260.936 254.157 340Z" fill="#646464" />
        </g>
        <g filter="url(#filter3_d_2058_981)">
            <ellipse cx="361.369" cy="340" rx="142.947" ry="143.158" fill="#1A95D3" />
        </g>
        {typeRecording != '' && typeRecording != 5 && (
            <>
                <text x="50%" y="20%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="45">
                    {text}
                </text>
                <text x="50%" y="83%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="90">
                    {initialNumber}
                </text>
            </>
        )}
        <defs>
            <filter id="filter0_d_2058_981" x="0" y="0" width="687" height="688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_981" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_981" result="shape" />
            </filter>
            <filter id="filter1_d_2058_981" x="35.7344" y="35.7896" width="615.523" height="616.421" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_981" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_981" result="shape" />
            </filter>
            <filter id="filter2_d_2058_981" x="187.617" y="196.842" width="180.953" height="297.043" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_981" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_981" result="shape" />
            </filter>
            <filter id="filter3_d_2058_981" x="193.822" y="175.242" width="329.098" height="329.516" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-3" />
                <feGaussianBlur stdDeviation="10.8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_981" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_981" result="shape" />
            </filter>
        </defs>
    </svg>

);

export const FemSuinoOvinoSVG = ({ text, uploadedFile, initialNumber, typeRecording }) => (
    <svg width="1477" height="1640" viewBox="0 0 1477 1640" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M738.389 0V1041.52V1640H77.7251C21.763 1621.35 2.59084 1575.23 0 1554.5V1041.52L738.389 0Z" fill="#1A95D3" />
        <path d="M738.389 0V1041.52V1640H1399.05C1455.01 1621.35 1474.19 1575.23 1476.78 1554.5V1041.52L738.389 0Z" fill="#1A95D3" />
        <g filter="url(#filter0_d_2058_982)">
            <circle cx="746.16" cy="295.355" r="295.355" fill="#1A95D3" />
        </g>
        <g filter="url(#filter1_d_2058_982)">
            <circle cx="746.164" cy="295.355" r="264.265" fill="#1A95D3" />
        </g>
        <g filter="url(#filter2_d_2058_982)">
            <path d="M668.439 295.356C668.439 364.039 814.846 419.716 746.164 419.716C668.439 435.262 614.031 371.811 614.031 303.129C614.031 234.447 677.482 170.996 746.164 170.996C814.846 170.996 668.439 226.674 668.439 295.356Z" fill="#646464" />
        </g>
        <g filter="url(#filter3_d_2058_982)">
            <ellipse cx="761.704" cy="295.356" rx="124.36" ry="124.36" fill="#1A95D3" />
        </g>
        {typeRecording != '' && typeRecording != 5 && (
            <>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="96">
                    {text}
                </text>
                <text x="50%" y="91%" dominantBaseline="middle" textAnchor="middle" fill="black" fontWeight="bold" fontSize="280">
                    {initialNumber}
                </text>
                {uploadedFile && (
                    <image
                        x="42%"
                        y="62%"
                        width="280px"
                        height="280px"
                        xlinkHref={uploadedFile}
                    />
                )}
            </>
        )}
        <defs>
            <filter id="filter0_d_2058_982" x="446.805" y="0" width="598.711" height="598.711" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_982" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_982" result="shape" />
            </filter>
            <filter id="filter1_d_2058_982" x="477.898" y="31.0898" width="536.531" height="536.531" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_982" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_982" result="shape" />
            </filter>
            <filter id="filter2_d_2058_982" x="610.031" y="170.996" width="158.469" height="259.09" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_982" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_982" result="shape" />
            </filter>
            <filter id="filter3_d_2058_982" x="612.744" y="149.396" width="291.919" height="291.921" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-3" />
                <feGaussianBlur stdDeviation="10.8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2058_982" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2058_982" result="shape" />
            </filter>
        </defs>
    </svg>

);