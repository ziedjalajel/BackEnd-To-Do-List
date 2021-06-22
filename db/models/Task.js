// const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) =>
  sequelize.define("Task", {
    task: {
      type: DataTypes.STRING,
    },
    // slug: {
    //   type: DataTypes.STRING,
    // },
    detail: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
    },
    done: {
      type: DataTypes.BOOLEAN,
    },
  });
// SequelizeSlugify.slugifyModel(Product, {
//   source: ["task"],
// });
