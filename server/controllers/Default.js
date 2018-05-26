'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.createImagesFromData = function createImagesFromData (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var imageData = req.swagger.params['imageData'].value;
  var tagIds = req.swagger.params['tagIds'].value;
  Default.createImagesFromData(projectId,imageData,tagIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createImagesFromFiles = function createImagesFromFiles (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var imageFileCreateBatch = req.swagger.params['imageFileCreateBatch'].value;
  Default.createImagesFromFiles(projectId,imageFileCreateBatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createImagesFromPredictions = function createImagesFromPredictions (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var imageIdCreateBatch = req.swagger.params['imageIdCreateBatch'].value;
  Default.createImagesFromPredictions(projectId,imageIdCreateBatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createImagesFromUrls = function createImagesFromUrls (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var imageUrlCreateBatch = req.swagger.params['imageUrlCreateBatch'].value;
  Default.createImagesFromUrls(projectId,imageUrlCreateBatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createProject = function createProject (req, res, next) {
  var name = req.swagger.params['name'].value;
  var description = req.swagger.params['description'].value;
  var domainId = req.swagger.params['domainId'].value;
  Default.createProject(name,description,domainId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createTag = function createTag (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var name = req.swagger.params['name'].value;
  var description = req.swagger.params['description'].value;
  Default.createTag(projectId,name,description)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteImageTags = function deleteImageTags (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var imageIds = req.swagger.params['imageIds'].value;
  var tagIds = req.swagger.params['tagIds'].value;
  Default.deleteImageTags(projectId,imageIds,tagIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteImages = function deleteImages (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var imageIds = req.swagger.params['imageIds'].value;
  Default.deleteImages(projectId,imageIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteIteration = function deleteIteration (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var iterationId = req.swagger.params['iterationId'].value;
  Default.deleteIteration(projectId,iterationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePrediction = function deletePrediction (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var ids = req.swagger.params['ids'].value;
  Default.deletePrediction(projectId,ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProject = function deleteProject (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  Default.deleteProject(projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTag = function deleteTag (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var tagId = req.swagger.params['tagId'].value;
  Default.deleteTag(projectId,tagId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.exportIteration = function exportIteration (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var iterationId = req.swagger.params['iterationId'].value;
  var platform = req.swagger.params['platform'].value;
  Default.exportIteration(projectId,iterationId,platform)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAccountInfo = function getAccountInfo (req, res, next) {
  Default.getAccountInfo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDomain = function getDomain (req, res, next) {
  var domainId = req.swagger.params['domainId'].value;
  Default.getDomain(domainId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDomains = function getDomains (req, res, next) {
  Default.getDomains()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExports = function getExports (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var iterationId = req.swagger.params['iterationId'].value;
  Default.getExports(projectId,iterationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getIteration = function getIteration (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var iterationId = req.swagger.params['iterationId'].value;
  Default.getIteration(projectId,iterationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getIterationPerformance = function getIterationPerformance (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var iterationId = req.swagger.params['iterationId'].value;
  var threshold = req.swagger.params['threshold'].value;
  Default.getIterationPerformance(projectId,iterationId,threshold)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getIterations = function getIterations (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  Default.getIterations(projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProject = function getProject (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  Default.getProject(projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProjects = function getProjects (req, res, next) {
  Default.getProjects()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTag = function getTag (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var tagId = req.swagger.params['tagId'].value;
  var iterationId = req.swagger.params['iterationId'].value;
  Default.getTag(projectId,tagId,iterationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTaggedImages = function getTaggedImages (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var iterationId = req.swagger.params['iterationId'].value;
  var tagIds = req.swagger.params['tagIds'].value;
  var orderBy = req.swagger.params['orderBy'].value;
  var take = req.swagger.params['take'].value;
  var skip = req.swagger.params['skip'].value;
  Default.getTaggedImages(projectId,iterationId,tagIds,orderBy,take,skip)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTags = function getTags (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var iterationId = req.swagger.params['iterationId'].value;
  Default.getTags(projectId,iterationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUntaggedImages = function getUntaggedImages (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var iterationId = req.swagger.params['iterationId'].value;
  var orderBy = req.swagger.params['orderBy'].value;
  var take = req.swagger.params['take'].value;
  var skip = req.swagger.params['skip'].value;
  Default.getUntaggedImages(projectId,iterationId,orderBy,take,skip)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postImageTags = function postImageTags (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var imageTagCreateBatch = req.swagger.params['imageTagCreateBatch'].value;
  Default.postImageTags(projectId,imageTagCreateBatch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryPredictionResults = function queryPredictionResults (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var predictionQueryToken = req.swagger.params['predictionQueryToken'].value;
  Default.queryPredictionResults(projectId,predictionQueryToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.quickTestImage = function quickTestImage (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var imageData = req.swagger.params['imageData'].value;
  var iterationId = req.swagger.params['iterationId'].value;
  Default.quickTestImage(projectId,imageData,iterationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.quickTestImageUrl = function quickTestImageUrl (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var iterationId = req.swagger.params['iterationId'].value;
  var imageUrl = req.swagger.params['imageUrl'].value;
  Default.quickTestImageUrl(projectId,iterationId,imageUrl)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.trainProject = function trainProject (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  Default.trainProject(projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateIteration = function updateIteration (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var iterationId = req.swagger.params['iterationId'].value;
  var iteration = req.swagger.params['iteration'].value;
  Default.updateIteration(projectId,iterationId,iteration)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProject = function updateProject (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var project = req.swagger.params['project'].value;
  Default.updateProject(projectId,project)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTag = function updateTag (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var tagId = req.swagger.params['tagId'].value;
  var tag = req.swagger.params['tag'].value;
  Default.updateTag(projectId,tagId,tag)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
