const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    task: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
    detail: {
      type: DataTypes.STRING,
    },
    priority: {
      type: DataTypes.STRING,
      defaultValue: "middle",
    },
    date: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
      },
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    category: {
      type: DataTypes.STRING,
    },
    deadline: {
      type: DataTypes.DATE,
    },
  });
  SequelizeSlugify.slugifyModel(Task, {
    source: ["task"],
  });
  return Task;
};
