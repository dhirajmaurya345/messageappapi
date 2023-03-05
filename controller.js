const dataModel=require('./dataModel')

exports.sendMessage = async (req, res) => {
    try {
      
        const messageData = await dataModel.create(req.body);
        res.status(200).json({
          status: "success",
          data: {
            messageData,
          },
        });
      } catch (err) {
        res.status(400).json({
          status: "Failed",
          message: err,
        });
      }
  };

  exports.recieveMessage = async (req, res) => {
    try {
      const messageData = await dataModel.find({senderId: req.query.senderId,recieverId: req.query.recieverId});
      res.status(200).json({
        status: "success",
        messageData
      });
    } catch (err) {
      res.status(400).json({
        status: "Failed",
        message: err,
      });
    }
  };

  exports.recieveGroupMessage = async (req, res) => {
    try {
      const messageData = await dataModel.find();
      res.status(200).json({
        status: "success",
        messageData
      });
    } catch (err) {
      res.status(400).json({
        status: "Failed",
        message: err,
      });
    }
  };

  // exports.singUp = async (req, res) => {
  //   try {
  //       const messageData = await dataModel.create(req.body);
  //       res.status(200).json({
  //         status: "success",
  //         data: {
  //           messageData,
  //         },
  //       });
  //     } catch (err) {
  //       res.status(400).json({
  //         status: "Failed",
  //         message: err,
  //       });
  //     }
  // };

  // exports.loadData = async (req, res) => {
  //   try {
  //     console.log("request body",req.body)  
  //     const messageData = await dataModel.create(req.body);
  //       res.status(200).json({
  //         status: "success",
  //         data: {
  //           messageData,
  //         },
  //       });
  //     } catch (err) {
  //       res.status(400).json({
  //         status: "Failed",
  //         message: err,
  //       });
  //     }
  // };

  

  // exports.readData = async (req, res) => {
  //   try {
  
  //     const messageData = await dataModel.find();
  //     res.status(200).json({
  //       status: "success",
  //       messageData
  //     });
  //   } catch (err) {
  //     res.status(400).json({
  //       status: "Failed",
  //       message: err,
  //     });
  //   }
  // };

