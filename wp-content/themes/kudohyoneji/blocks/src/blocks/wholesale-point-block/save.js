export default function Save({ attributes }) {
  const {
    bodyText,
    beforeImageUrl,
    beforeImageAlt,
    afterImageUrl,
    afterImageAlt,
    bottomImageUrl,
    bottomImageAlt,
    rightImageUrl,
    rightImageAlt,
    marginTop,
  } = attributes;

  return (
    <div className="wholesale-point-block" style={{ marginTop }}>
      <div className="wholesale-point-block__inner">
        {/* Left */}
        <div className="wholesale-point-block__left">
          {bodyText && (
            <p className="wholesale-point-block__text">
              {bodyText.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < bodyText.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
          )}

          <ul className="wholesale-point-block__before-after">
            <li className="wholesale-point-block__image-item">
              {beforeImageUrl && (
                <img
                  src={beforeImageUrl}
                  alt={beforeImageAlt || "施工前"}
                  width="237"
                  height="177"
                  loading="lazy"
                />
              )}
              <p className="wholesale-point-block__label">施工前</p>
            </li>
            <li className="wholesale-point-block__image-item">
              {afterImageUrl && (
                <img
                  src={afterImageUrl}
                  alt={afterImageAlt || "施工後"}
                  width="237"
                  height="177"
                  loading="lazy"
                />
              )}
              <p className="wholesale-point-block__label">施工後</p>
            </li>
          </ul>

          {bottomImageUrl && (
            <img
              src={bottomImageUrl}
              alt={bottomImageAlt || "イメージ画像"}
              width="505"
              height="191"
              className="wholesale-point-block__bottom-image"
              loading="lazy"
            />
          )}
        </div>

        {/* Right */}
        <div className="wholesale-point-block__right">
          {rightImageUrl && (
            <img
              src={rightImageUrl}
              alt={rightImageAlt || "イメージ画像"}
              width="394"
              height="710"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
  );
}
