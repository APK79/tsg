import PostModel from "../models/post-model.js";


export const getAll = async (req, res) => {
    try {

        const posts = await PostModel.find().populate( { path: "user", select: ["fullName", "avatarUrl"] } ).exec();
        
        res.json(posts);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "не удалось получить статьи",
        });
    }
}

export const getOne = async(req, res) => {
    try {

        const postId = req.params.id;
       
        PostModel.findOneAndUpdate(
            {  _id: postId,  },
            {  $inc: { viewsCount: 1 },  },
            {  returnDocument: "After",  } 
            )   
                .then ( doc => {
                    if (!doc) {
                        console.log(err);
                        res.status(404).json( { message: "Статья не найдена" } );
                    }
                    
                    res.json(doc);

                } )
                .catch ( (err) => {
                    console.log(err);
                    res.status(404).json( { message: "Статья не найдена" } );
                })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "не удалось получить статьи",
        });
    }
}

export const remove = async(req, res) => {
    try {

        const postId = req.params.id;
       
        PostModel.findOneAndDelete( {  _id: postId,  }, )   
                .then ( doc => {
                    if (!doc) throw Error;
                    res.json({ message: 'статья удалена' });
                } )
                .catch ( (err) => {
                    console.log(err);
                    res.status(404).json( { message: "Статья не найдена" } );
                })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "не удалось получить статью",
        });
    }
}
export const update = async (req, res) => {
    try {

        const postId = req.params.id;
       
        await PostModel.updateOne(
            {  _id: postId,  }, 
            {
                title: req.body.title,
                text: req.body.text,
                imgUrl: req.body.imgUrl,
                tags: req.body.tags,
                user: req.userId,
            }

        );
            res.json({ message: 'Готово' });
    }

    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "не удалось обновить статью",
        });
    }
}

export const create = async (req, res) => {
    try {

        const doc = new PostModel({
            title: req.body.title,
            text: req.body.text,
            imgUrl: req.body.imgUrl,
            tags: req.body.tags,
            user: req.userId,
        });

        const post = await doc.save();

        res.json(post);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "не удалось создать статью",
        });
    }
}