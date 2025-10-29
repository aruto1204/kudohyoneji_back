/**
 * Save component for Ikeuchi Shakanai Tips Block
 */
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { marginTop, taglineText, titleText, bodyText, imageUrl, imageAlt } = attributes;

  const blockProps = useBlockProps.save({
    className: "ikeuchi-shakanai-tips-block",
    style: { marginTop: marginTop },
  });

  return (
    <div {...blockProps}>
      <div className="tips-logo-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="82.394" height="54.778" viewBox="0 0 82.394 54.778" className="tips-logo">
          <g transform="translate(-206.82 -319.93)">
            <path d="M214.131,326.491H206.82V320.34h22.109v6.151h-7.312v35.28h-7.485Z" transform="translate(0 -0.12)" fill="currentColor"></path>
            <path d="M243.615,319.93h7.08v7.485h-7.08Zm0,11.664h7.08v30.058h-7.08Z" transform="translate(-10.743)" fill="currentColor"></path>
            <path
              d="M261.152,336.14h5.455l.7,2.089a7.33,7.33,0,0,1,6.035-2.727c5.628,0,8.065,3.539,8.065,11.606v6.557c0,9.4-2.437,13.172-8.414,13.172a7.953,7.953,0,0,1-4.758-1.393v13.81h-7.08Zm13.172,10.445c0-3.482-.87-4.991-2.844-4.991-2.263,0-3.249,2.031-3.249,6.615v5.919c0,4.584.986,6.615,3.249,6.615,1.973,0,2.844-1.8,2.844-6.152Z"
              transform="translate(-15.863 -4.546)"
              fill="currentColor"
            ></path>
            <path
              d="M300.9,356.856c.116,3.133,1.044,4.119,3.83,4.119,2.321,0,3.481-1.16,3.481-3.423a3.225,3.225,0,0,0-1.044-2.611c-.581-.348-.581-.348-3.54-1.219-4-1.219-5.106-1.741-6.325-2.959-1.393-1.393-2.147-3.714-2.147-6.558,0-5.686,3.134-8.7,9.052-8.7,4,0,6.963,1.393,8.414,3.946.755,1.277.987,2.669,1.1,5.4h-6.556q0-3.481-2.785-3.481c-1.741,0-2.669,1.1-2.669,3.018,0,2.147.87,3.017,3.772,3.829,4.874,1.277,5.8,1.683,6.964,2.785,1.567,1.451,2.32,3.6,2.32,6.673,0,6.209-3.365,9.168-10.27,9.168-4.527,0-7.718-1.509-9.11-4.294-.7-1.335-.987-2.9-1.044-5.686Z"
              transform="translate(-25.553 -4.546)"
              fill="currentColor"
            ></path>
          </g>
        </svg>
      </div>
      <div className="tips-content-box">
        <div className="tips-inner-wrapper">
          <div className="tips-text-area">
            <div className="tips-tagline-wrapper">
              <p className="tips-tagline-text">{taglineText}</p>
            </div>
            <p className="tips-title-text">{titleText}</p>
            <p className="tips-body-text">{bodyText}</p>
          </div>
          {imageUrl && (
            <div className="tips-image-wrapper">
              <img src={imageUrl} alt={imageAlt} width="360" height="202" className="tips-image" loading="lazy" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
