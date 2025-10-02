const { DetailedAccount } = require('../modelos');

const create = async (action) => {
    const detailedAccount = new DetailedAccount(action);
    return detailedAccount.save();
};

const getById = async (id) => {
  return DetailedAccount.findById(id);
};

const get = async (detailedAccount={}) => {
    return DetailedAccount.find(detailedAccount);
};

const updateById = async (id, updates = {}) => {
  return DetailedAccount.findByIdAndUpdate(id, updates, { new: true });
};

const removeById = async (id) => {
  return DetailedAccount.findByIdAndDelete(id);
};

module.exports = {
  create,
  getById,
  get,
  updateById,
  removeById
};
