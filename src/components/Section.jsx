/**
 * A titled block. Most sections use the panel shell; the short reference blocks
 * at the foot of the page use `plain`, so the page does not read as ten
 * identical cards stacked to the bottom.
 */
const Section = ({ id, title, note, plain = false, children }) => (
  <section
    className={`container section${plain ? ' section--plain' : ''}`}
    aria-labelledby={`${id}-title`}
  >
    <div className={plain ? 'plain-block' : 'panel'}>
      <div className={plain ? 'plain-block__header' : 'panel__header'}>
        <h2 className={plain ? 'plain-block__title' : 'panel__title'} id={`${id}-title`}>
          {title}
        </h2>
        {note ? <p className={plain ? 'plain-block__note' : 'panel__note'}>{note}</p> : null}
      </div>
      <div className={plain ? 'plain-block__body' : 'panel__body'}>{children}</div>
    </div>
  </section>
);

export default Section;
