const SingleProject = ({ name, description, href, imgSource, alt , fill, width, height, optionalSizes }) => (
  <a href={href} className={fill}>
    <div className='div-project-content'>
      <h3 className='h3 selected-work'>{name}</h3>
      <p className='body-paragraph card truncate'>{description}<br /></p>
      <div className='div-view-project'>
        <div className='body-paragraph high-emphasis selected-work fa-solid'></div>
        <div className='body-paragraph high-emphasis selected-work'>View Project</div>
        <div className='body-paragraph high-emphasis selected-work fa-light'></div>
      </div>
    </div>
    <img src={imgSource} width={width} height={height} alt={alt} sizes={optionalSizes} className='image-project half image-project-quicknote' />
  </a>
);



export default SingleProject;
