const dataModel=require('./dataModel')

exports.sendMessage = async (req, res) => {
    try {
        const messageData = await dataModel.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidator: true,
        });
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
      const messageData = await dataModel.findById(req.params.id);
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

  exports.singUp = async (req, res) => {
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

  exports.loadData = async (req, res) => {
    try {
      console.log("request body",req.body)  
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
