import User from "../models/UserModel.js";

// method
export const getUsers = async(req, res) => {
    // try & catch block (findAll adalah fungsi dari squelize)
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        
    }
}


// copy paste di atas
export const getUserById = async(req, res) => {
    try {
        const response = await User.findOne({
            // cari data berdasarkan parameter id
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        
    }
}

export const createUser = async(req, res) => {
    try {
        await User.create(req.body);
        res.status(201).json({msg: "user terbuat"});
    } catch (error) {
        console.log(error.message);
        
    }
}

export const updateUser = async(req, res) => {
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "user updates"});
    } catch (error) {
        console.log(error.message);
        
    }
}

export const deleteUser = async(req, res) => {
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "user Deleted"});
    } catch (error) {
        console.log(error.message);
        
    }
}