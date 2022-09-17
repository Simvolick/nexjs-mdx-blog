import fs from "fs"

const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('src', 'posts'))
    
}