import "./Card.css";

const CardWithCSS = () => {

    return (

        <div className="card">
            <img className="card-image" src="https://via.placeholder.com/300" alt="Placeholder" />

            <div className="card-content">
                <div className="card-title">Title</div>
                <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsam vel ut perferendis harum cumque nemo illum impedit exercitationem hic aliquam molestias enim nihil ex tempora, modi voluptate. Nesciunt, incidunt?
                </p>
            </div>
            <div className="card-tags">
                <span className="card-tag">#tag1</span>
                <span className="card-tag">#tag2</span>
                <span className="card-tag">#tag3</span>
            </div>
        </div>

    )

};

export default CardWithCSS;