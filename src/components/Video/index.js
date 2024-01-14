import styles from "./Video.module.css";

function Video({ src, titulo }) {
    return (
        <div className={styles.videoContainer}>
            <iframe 
                width="560" 
                height="315" 
                src={ src } 
                title={ titulo }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
            
        </div>
    );
}

export default Video;