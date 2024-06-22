db = db.getSiblingDB("admin");

db.createUser({
  user: "nest",
  pwd: "password",
  roles: [{ role: "readWrite", db: "productsdb" }],
});
