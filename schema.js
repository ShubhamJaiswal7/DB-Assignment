const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql', // or 'sqlite', 'postgres', 'mssql', depending on DB
});

const ProductCategory = sequelize.define('ProductCategory', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  desc: {
    type: Sequelize.TEXT
  },
  createdAt: {
    field: 'created_at',
    type: Sequelize.DATE
  },
  modifiedAt: {
    field: 'modified_at',
    type: Sequelize.DATE
  },
  deletedAt: {
    field: 'deleted_at',
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

const ProductInventory = sequelize.define('ProductInventory', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  createdAt: {
    field: 'created_at',
    type: Sequelize.DATE
  },
  modifiedAt: {
    field: 'modified_at',
    type: Sequelize.DATE
  },
  deletedAt: {
    field: 'deleted_at',
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

const Discount = sequelize.define('Discount', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  desc: {
    type: Sequelize.TEXT
  },
  discountPercent: {
    field: 'discount_percent',
    type: Sequelize.DECIMAL(10, 2)
  },
  active: {
    type: Sequelize.BOOLEAN
  },
  createdAt: {
    field: 'created_at',
    type: Sequelize.DATE
  },
  modifiedAt: {
    field: 'modified_at',
    type: Sequelize.DATE
  },
  deletedAt: {
    field: 'deleted_at',
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

const Product = sequelize.define('Product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  desc: {
    type: Sequelize.TEXT
  },
  SKU: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DECIMAL(10, 2)
  },
  createdAt: {
    field: 'created_at',
    type: Sequelize.DATE
  },
  modifiedAt: {
    field: 'modified_at',
    type: Sequelize.DATE
  },
  deletedAt: {
    field: 'deleted_at',
    type: Sequelize.DATE
  },
  // Foreign keys
  category_id: {
    type: Sequelize.INTEGER,
    references: {
      model: ProductCategory,
      key: 'id'
    }
  },
  inventory_id: {
    type: Sequelize.INTEGER,
    references: {
      model: ProductInventory,
      key: 'id'
    }
  },
  discount_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Discount,
      key: 'id'
    }
  }
}, {
  timestamps: false
});

// Relationships
Product.belongsTo(ProductCategory, { foreignKey: 'category_id' });
Product.belongsTo(ProductInventory, { foreignKey: 'inventory_id' });
Product.belongsTo(Discount, { foreignKey: 'discount_id' });

module.exports = {
  Product,
  ProductCategory,
  ProductInventory,
  Discount
};
