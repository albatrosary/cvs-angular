'use strict';


/**
 * CreateImagesFromData
 * This API accepts body content as multipart/form-data and application/octet-stream. When using multipart  multiple image files can be sent at once, with a maximum of 64 files
 *
 * projectId String Format - uuid. The project id
 * imageData String 
 * tagIds String The tags ids with which to tag each image. Limited to 20 (optional)
 * returns ImageCreateSummary
 **/
exports.createImagesFromData = function(projectId,imageData,tagIds) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Images" : [ {
    "Status" : "OK",
    "SourceUrl" : "SourceUrl",
    "Image" : {
      "ThumbnailUri" : "ThumbnailUri",
      "Predictions" : [ {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Probability" : 1.4658129,
        "Tag" : "Tag"
      }, {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Probability" : 1.4658129,
        "Tag" : "Tag"
      } ],
      "Height" : 6,
      "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "ImageUri" : "ImageUri",
      "Width" : 0,
      "Tags" : [ {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Created" : "2000-01-23T04:56:07.000+00:00"
      }, {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Created" : "2000-01-23T04:56:07.000+00:00"
      } ],
      "Created" : "2000-01-23T04:56:07.000+00:00"
    }
  }, {
    "Status" : "OK",
    "SourceUrl" : "SourceUrl",
    "Image" : {
      "ThumbnailUri" : "ThumbnailUri",
      "Predictions" : [ {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Probability" : 1.4658129,
        "Tag" : "Tag"
      }, {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Probability" : 1.4658129,
        "Tag" : "Tag"
      } ],
      "Height" : 6,
      "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "ImageUri" : "ImageUri",
      "Width" : 0,
      "Tags" : [ {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Created" : "2000-01-23T04:56:07.000+00:00"
      }, {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Created" : "2000-01-23T04:56:07.000+00:00"
      } ],
      "Created" : "2000-01-23T04:56:07.000+00:00"
    }
  } ],
  "IsBatchSuccessful" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * CreateImagesFromFiles
 * Add the provided batch of images to the set of training images
 *
 * projectId String Format - uuid. The project id
 * imageFileCreateBatch ImageFileCreateBatch The batch of image files to add. Limited to 64 images and 20 tags per batch (optional)
 * returns ImageCreateSummary
 **/
exports.createImagesFromFiles = function(projectId,imageFileCreateBatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Images" : [ {
    "Status" : "OK",
    "SourceUrl" : "SourceUrl",
    "Image" : {
      "ThumbnailUri" : "ThumbnailUri",
      "Predictions" : [ {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Probability" : 1.4658129,
        "Tag" : "Tag"
      }, {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Probability" : 1.4658129,
        "Tag" : "Tag"
      } ],
      "Height" : 6,
      "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "ImageUri" : "ImageUri",
      "Width" : 0,
      "Tags" : [ {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Created" : "2000-01-23T04:56:07.000+00:00"
      }, {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Created" : "2000-01-23T04:56:07.000+00:00"
      } ],
      "Created" : "2000-01-23T04:56:07.000+00:00"
    }
  }, {
    "Status" : "OK",
    "SourceUrl" : "SourceUrl",
    "Image" : {
      "ThumbnailUri" : "ThumbnailUri",
      "Predictions" : [ {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Probability" : 1.4658129,
        "Tag" : "Tag"
      }, {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Probability" : 1.4658129,
        "Tag" : "Tag"
      } ],
      "Height" : 6,
      "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "ImageUri" : "ImageUri",
      "Width" : 0,
      "Tags" : [ {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Created" : "2000-01-23T04:56:07.000+00:00"
      }, {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Created" : "2000-01-23T04:56:07.000+00:00"
      } ],
      "Created" : "2000-01-23T04:56:07.000+00:00"
    }
  } ],
  "IsBatchSuccessful" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * CreateImagesFromPredictions
 * Add the specified predicted images to the set of training images
 *
 * projectId String Format - uuid. The project id
 * imageIdCreateBatch ImageIdCreateBatch Image and tag ids. Limted to 64 images and 20 tags per batch (optional)
 * returns ImageCreateSummary
 **/
exports.createImagesFromPredictions = function(projectId,imageIdCreateBatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Images" : [ {
    "Status" : "OK",
    "SourceUrl" : "SourceUrl",
    "Image" : {
      "ThumbnailUri" : "ThumbnailUri",
      "Predictions" : [ {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Probability" : 1.4658129,
        "Tag" : "Tag"
      }, {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Probability" : 1.4658129,
        "Tag" : "Tag"
      } ],
      "Height" : 6,
      "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "ImageUri" : "ImageUri",
      "Width" : 0,
      "Tags" : [ {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Created" : "2000-01-23T04:56:07.000+00:00"
      }, {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Created" : "2000-01-23T04:56:07.000+00:00"
      } ],
      "Created" : "2000-01-23T04:56:07.000+00:00"
    }
  }, {
    "Status" : "OK",
    "SourceUrl" : "SourceUrl",
    "Image" : {
      "ThumbnailUri" : "ThumbnailUri",
      "Predictions" : [ {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Probability" : 1.4658129,
        "Tag" : "Tag"
      }, {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Probability" : 1.4658129,
        "Tag" : "Tag"
      } ],
      "Height" : 6,
      "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "ImageUri" : "ImageUri",
      "Width" : 0,
      "Tags" : [ {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Created" : "2000-01-23T04:56:07.000+00:00"
      }, {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Created" : "2000-01-23T04:56:07.000+00:00"
      } ],
      "Created" : "2000-01-23T04:56:07.000+00:00"
    }
  } ],
  "IsBatchSuccessful" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * CreateImagesFromUrls
 * Add the provided images urls to the set of training images
 *
 * projectId String Format - uuid. The project id
 * imageUrlCreateBatch ImageUrlCreateBatch Image urls and tag ids. Limited to 64 images and 20 tags per batch (optional)
 * returns ImageCreateSummary
 **/
exports.createImagesFromUrls = function(projectId,imageUrlCreateBatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Images" : [ {
    "Status" : "OK",
    "SourceUrl" : "SourceUrl",
    "Image" : {
      "ThumbnailUri" : "ThumbnailUri",
      "Predictions" : [ {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Probability" : 1.4658129,
        "Tag" : "Tag"
      }, {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Probability" : 1.4658129,
        "Tag" : "Tag"
      } ],
      "Height" : 6,
      "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "ImageUri" : "ImageUri",
      "Width" : 0,
      "Tags" : [ {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Created" : "2000-01-23T04:56:07.000+00:00"
      }, {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Created" : "2000-01-23T04:56:07.000+00:00"
      } ],
      "Created" : "2000-01-23T04:56:07.000+00:00"
    }
  }, {
    "Status" : "OK",
    "SourceUrl" : "SourceUrl",
    "Image" : {
      "ThumbnailUri" : "ThumbnailUri",
      "Predictions" : [ {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Probability" : 1.4658129,
        "Tag" : "Tag"
      }, {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Probability" : 1.4658129,
        "Tag" : "Tag"
      } ],
      "Height" : 6,
      "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "ImageUri" : "ImageUri",
      "Width" : 0,
      "Tags" : [ {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Created" : "2000-01-23T04:56:07.000+00:00"
      }, {
        "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "Created" : "2000-01-23T04:56:07.000+00:00"
      } ],
      "Created" : "2000-01-23T04:56:07.000+00:00"
    }
  } ],
  "IsBatchSuccessful" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * CreateProject
 * Create a project
 *
 * name String Name of the project
 * description String The description of the project (optional)
 * domainId String Format - uuid. The id of the domain to use for this project. Defaults to General (optional)
 * returns Project
 **/
exports.createProject = function(name,description,domainId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "LastModified" : "2000-01-23T04:56:07.000+00:00",
  "Description" : "Description",
  "ThumbnailUri" : "ThumbnailUri",
  "CurrentIterationId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Settings" : {
    "DomainId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "Name" : "Name",
  "Created" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * CreateTag
 * Create a tag for the project
 *
 * projectId String Format - uuid. The project id
 * name String The tag name
 * description String Optional description for the tag (optional)
 * returns Tag
 **/
exports.createTag = function(projectId,name,description) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ImageCount" : 0,
  "Description" : "Description",
  "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Name" : "Name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * DeleteImageTags
 * Remove a set of tags from a set of images
 *
 * projectId String Format - uuid. The project id
 * imageIds String Image ids. Limited to 64 images
 * tagIds String Tags to be deleted from the specified images. Limted to 20 tags
 * no response value expected for this operation
 **/
exports.deleteImageTags = function(projectId,imageIds,tagIds) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * DeleteImages
 * Delete images from the set of training images
 *
 * projectId String Format - uuid. The project id
 * imageIds String Ids of the images to be deleted. Limted to 256 images per batch
 * no response value expected for this operation
 **/
exports.deleteImages = function(projectId,imageIds) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * DeleteIteration
 * Delete a specific iteration of a project
 *
 * projectId String Format - uuid. The project id
 * iterationId String Format - uuid. The iteration id
 * no response value expected for this operation
 **/
exports.deleteIteration = function(projectId,iterationId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * DeletePrediction
 * Delete a set of predicted images and their associated prediction results
 *
 * projectId String Format - uuid. The project id
 * ids String The prediction ids. Limited to 64
 * no response value expected for this operation
 **/
exports.deletePrediction = function(projectId,ids) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * DeleteProject
 * Delete a specific project
 *
 * projectId String Format - uuid. The project id
 * no response value expected for this operation
 **/
exports.deleteProject = function(projectId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * DeleteTag
 * Delete a tag from the project
 *
 * projectId String Format - uuid. The project id
 * tagId String Format - uuid. Id of the tag to be deleted
 * no response value expected for this operation
 **/
exports.deleteTag = function(projectId,tagId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * ExportIteration
 * Export a trained iteration
 *
 * projectId String Format - uuid. The project id
 * iterationId String Format - uuid. The iteration id
 * platform String The target platform (coreml or tensorflow)
 * returns Export
 **/
exports.exportIteration = function(projectId,iterationId,platform) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Status" : "Exporting",
  "Platform" : "CoreML",
  "DownloadUri" : "DownloadUri"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * GetAccountInfo
 * Get basic information about your account
 *
 * returns Account
 **/
exports.getAccountInfo = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "UserName" : "UserName",
  "Email" : "Email",
  "Quotas" : {
    "Tier" : "Tier",
    "Predictions" : {
      "Used" : 6,
      "Total" : 0,
      "TimeUntilReset" : "TimeUntilReset"
    },
    "Projects" : {
      "Used" : 6,
      "Total" : 0,
      "TimeUntilReset" : "TimeUntilReset"
    },
    "PerProject" : [ {
      "Images" : {
        "Used" : 6,
        "Total" : 0,
        "TimeUntilReset" : "TimeUntilReset"
      },
      "ProjectId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "Iterations" : {
        "Used" : 6,
        "Total" : 0,
        "TimeUntilReset" : "TimeUntilReset"
      },
      "Tags" : {
        "Used" : 6,
        "Total" : 0,
        "TimeUntilReset" : "TimeUntilReset"
      }
    }, {
      "Images" : {
        "Used" : 6,
        "Total" : 0,
        "TimeUntilReset" : "TimeUntilReset"
      },
      "ProjectId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "Iterations" : {
        "Used" : 6,
        "Total" : 0,
        "TimeUntilReset" : "TimeUntilReset"
      },
      "Tags" : {
        "Used" : 6,
        "Total" : 0,
        "TimeUntilReset" : "TimeUntilReset"
      }
    } ]
  },
  "Keys" : {
    "TrainingKeys" : {
      "SecondaryKey" : "SecondaryKey",
      "PrimaryKey" : "PrimaryKey"
    },
    "PredictionKeys" : {
      "SecondaryKey" : "SecondaryKey",
      "PrimaryKey" : "PrimaryKey"
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * GetDomain
 * Get information about a specific domain
 *
 * domainId String Format - uuid. The id of the domain to get information about
 * returns Domain
 **/
exports.getDomain = function(domainId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Exportable" : true,
  "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Name" : "Name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * GetDomains
 * Get a list of the available domains
 *
 * returns DomainArray
 **/
exports.getDomains = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * GetExports
 * Get the list of exports for a specific iteration
 *
 * projectId String Format - uuid. The project id
 * iterationId String Format - uuid. The iteration id
 * returns ExportArray
 **/
exports.getExports = function(projectId,iterationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * GetIteration
 * Get a specific iteration
 *
 * projectId String Format - uuid. The id of the project the iteration belongs to
 * iterationId String Format - uuid. The id of the iteration to get
 * returns Iteration
 **/
exports.getIteration = function(projectId,iterationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "IsDefault" : true,
  "Status" : "Status",
  "LastModified" : "2000-01-23T04:56:07.000+00:00",
  "Exportable" : true,
  "DomainId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ProjectId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "TrainedAt" : "2000-01-23T04:56:07.000+00:00",
  "Name" : "Name",
  "Created" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * GetIterationPerformance
 * Get detailed performance information about a trained iteration
 *
 * projectId String Format - uuid. The project id
 * iterationId String Format - uuid. The id of the trained iteration
 * threshold BigDecimal Format - float. The 0 to 1 threshold to determine positive prediction
 * returns IterationPerformance
 **/
exports.getIterationPerformance = function(projectId,iterationId,threshold) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Precision" : 5.637376656633329,
  "RecallStdDeviation" : 9.301444243932576,
  "PerTagPerformance" : [ {
    "Precision" : 0.8008281904610115,
    "RecallStdDeviation" : 5.962133916683182,
    "Recall" : 1.4658129805029452,
    "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "PrecisionStdDeviation" : 6.027456183070403,
    "Name" : "Name"
  }, {
    "Precision" : 0.8008281904610115,
    "RecallStdDeviation" : 5.962133916683182,
    "Recall" : 1.4658129805029452,
    "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "PrecisionStdDeviation" : 6.027456183070403,
    "Name" : "Name"
  } ],
  "Recall" : 7.061401241503109,
  "PrecisionStdDeviation" : 2.3021358869347655
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * GetIterations
 * Get iterations for the project
 *
 * projectId String Format - uuid. The project id
 * returns IterationArray
 **/
exports.getIterations = function(projectId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * GetProject
 * Get a specific project
 *
 * projectId String Format - uuid. The id of the project to get
 * returns Project
 **/
exports.getProject = function(projectId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "LastModified" : "2000-01-23T04:56:07.000+00:00",
  "Description" : "Description",
  "ThumbnailUri" : "ThumbnailUri",
  "CurrentIterationId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Settings" : {
    "DomainId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "Name" : "Name",
  "Created" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * GetProjects
 * Get your projects
 *
 * returns ProjectArray
 **/
exports.getProjects = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * GetTag
 * Get information about a specific tag
 *
 * projectId String Format - uuid. The project this tag belongs to
 * tagId String Format - uuid. The tag id
 * iterationId String Format - uuid. The iteration to retrieve this tag from. Optional, defaults to current training set (optional)
 * returns Tag
 **/
exports.getTag = function(projectId,tagId,iterationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ImageCount" : 0,
  "Description" : "Description",
  "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Name" : "Name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * GetTaggedImages
 * This API supports batching and range selection. By default it will only return first 50 images matching images.  Use the {take} and {skip} parameters to control how many images to return in a given batch.  The filtering is on an and/or relationship. For example, if the provided tag ids are for the \"Dog\" and  \"Cat\" tags, then only images tagged with Dog and/or Cat will be returned
 *
 * projectId String Format - uuid. The project id
 * iterationId String Format - uuid. The iteration id. Defaults to workspace (optional)
 * tagIds String An list of tags ids to filter the images. Defaults to all tagged images when null. Limited to 20 (optional)
 * orderBy String The ordering. Defaults to newest (optional)
 * take Integer Format - int32. Maximum number of images to return. Defaults to 50, limited to 256 (optional)
 * skip Integer Format - int32. Number of images to skip before beginning the image batch. Defaults to 0 (optional)
 * returns ImageArray
 **/
exports.getTaggedImages = function(projectId,iterationId,tagIds,orderBy,take,skip) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * GetTags
 * Get the tags for a given project and iteration
 *
 * projectId String Format - uuid. The project id
 * iterationId String Format - uuid. The iteration id. Defaults to workspace (optional)
 * returns TagList
 **/
exports.getTags = function(projectId,iterationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "TotalUntaggedImages" : 1,
  "TotalTaggedImages" : 6,
  "Tags" : [ {
    "ImageCount" : 0,
    "Description" : "Description",
    "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "Name" : "Name"
  }, {
    "ImageCount" : 0,
    "Description" : "Description",
    "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "Name" : "Name"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * GetUntaggedImages
 * This API supports batching and range selection. By default it will only return first 50 images matching images.  Use the {take} and {skip} parameters to control how many images to return in a given batch.
 *
 * projectId String Format - uuid. The project id
 * iterationId String Format - uuid. The iteration id. Defaults to workspace (optional)
 * orderBy String The ordering. Defaults to newest (optional)
 * take Integer Format - int32. Maximum number of images to return. Defaults to 50, limited to 256 (optional)
 * skip Integer Format - int32. Number of images to skip before beginning the image batch. Defaults to 0 (optional)
 * returns ImageArray
 **/
exports.getUntaggedImages = function(projectId,iterationId,orderBy,take,skip) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * PostImageTags
 * Associate a set of images with a set of tags
 *
 * projectId String Format - uuid. The project id
 * imageTagCreateBatch ImageTagCreateBatch Batch of image tags. Limited to 128 tags per batch (optional)
 * returns ImageTagCreateSummary
 **/
exports.postImageTags = function(projectId,imageTagCreateBatch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Duplicated" : [ {
    "ImageId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }, {
    "ImageId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  } ],
  "Exceeded" : [ {
    "ImageId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }, {
    "ImageId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  } ],
  "Created" : [ {
    "ImageId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }, {
    "ImageId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * QueryPredictionResults
 * Get images that were sent to your prediction endpoint
 *
 * projectId String Format - uuid. The project id
 * predictionQueryToken PredictionQueryToken Parameters used to query the predictions. Limited to combining 2 tags (optional)
 * returns PredictionQuery
 **/
exports.queryPredictionResults = function(projectId,predictionQueryToken) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Results" : [ {
    "Project" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "Predictions" : [ {
      "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "Probability" : 1.4658129,
      "Tag" : "Tag"
    }, {
      "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "Probability" : 1.4658129,
      "Tag" : "Tag"
    } ],
    "ThumbnailUri" : "ThumbnailUri",
    "Iteration" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "ImageUri" : "ImageUri",
    "Created" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "Project" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "Predictions" : [ {
      "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "Probability" : 1.4658129,
      "Tag" : "Tag"
    }, {
      "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "Probability" : 1.4658129,
      "Tag" : "Tag"
    } ],
    "ThumbnailUri" : "ThumbnailUri",
    "Iteration" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "ImageUri" : "ImageUri",
    "Created" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "Token" : {
    "OrderBy" : "Newest",
    "Continuation" : "Continuation",
    "EndTime" : "2000-01-23T04:56:07.000+00:00",
    "IterationId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "StartTime" : "2000-01-23T04:56:07.000+00:00",
    "MaxCount" : 0,
    "Application" : "Application",
    "Tags" : [ {
      "MaxThreshold" : 1.4658129,
      "MinThreshold" : 6.0274563,
      "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    }, {
      "MaxThreshold" : 1.4658129,
      "MinThreshold" : 6.0274563,
      "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    } ],
    "Session" : "Session"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * QuickTestImage
 * Quick test an image
 *
 * projectId String Format - uuid. The project id
 * imageData String 
 * iterationId String Format - uuid. Optional. Specifies the id of a particular iteration to evaluate against.              The default iteration for the project will be used when not specified. (optional)
 * returns ImagePredictionResult
 **/
exports.quickTestImage = function(projectId,imageData,iterationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Project" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Predictions" : [ {
    "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "Probability" : 0.8008282,
    "Tag" : "Tag"
  }, {
    "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "Probability" : 0.8008282,
    "Tag" : "Tag"
  } ],
  "Iteration" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Created" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * QuickTestImageUrl
 * Quick test an image url
 *
 * projectId String Format - uuid. The project to evaluate against
 * iterationId String Format - uuid. Optional. Specifies the id of a particular iteration to evaluate against.              The default iteration for the project will be used when not specified. (optional)
 * imageUrl ImageUrl An {Iris.Web.Api.Models.ImageUrl} that contains the url of the image to be evaluated (optional)
 * returns ImagePredictionResult
 **/
exports.quickTestImageUrl = function(projectId,iterationId,imageUrl) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Project" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Predictions" : [ {
    "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "Probability" : 0.8008282,
    "Tag" : "Tag"
  }, {
    "TagId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "Probability" : 0.8008282,
    "Tag" : "Tag"
  } ],
  "Iteration" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Created" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * TrainProject
 * Queues project for training
 *
 * projectId String Format - uuid. The project id
 * returns Iteration
 **/
exports.trainProject = function(projectId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "IsDefault" : true,
  "Status" : "Status",
  "LastModified" : "2000-01-23T04:56:07.000+00:00",
  "Exportable" : true,
  "DomainId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ProjectId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "TrainedAt" : "2000-01-23T04:56:07.000+00:00",
  "Name" : "Name",
  "Created" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * UpdateIteration
 * Update a specific iteration
 *
 * projectId String Format - uuid. Project id
 * iterationId String Format - uuid. Iteration id
 * iteration Iteration The updated iteration model (optional)
 * returns Iteration
 **/
exports.updateIteration = function(projectId,iterationId,iteration) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "IsDefault" : true,
  "Status" : "Status",
  "LastModified" : "2000-01-23T04:56:07.000+00:00",
  "Exportable" : true,
  "DomainId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "ProjectId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "TrainedAt" : "2000-01-23T04:56:07.000+00:00",
  "Name" : "Name",
  "Created" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * UpdateProject
 * Update a specific project
 *
 * projectId String Format - uuid. The id of the project to update
 * project Project The updated project model (optional)
 * returns Project
 **/
exports.updateProject = function(projectId,project) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "LastModified" : "2000-01-23T04:56:07.000+00:00",
  "Description" : "Description",
  "ThumbnailUri" : "ThumbnailUri",
  "CurrentIterationId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Settings" : {
    "DomainId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "Name" : "Name",
  "Created" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * UpdateTag
 * Update a tag
 *
 * projectId String Format - uuid. The project id
 * tagId String Format - uuid. The id of the target tag
 * tag Tag The updated tag model (optional)
 * returns Tag
 **/
exports.updateTag = function(projectId,tagId,tag) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ImageCount" : 0,
  "Description" : "Description",
  "Id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "Name" : "Name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

