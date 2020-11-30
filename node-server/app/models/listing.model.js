module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      id: Number,
      address: String,
      neighborhood: String,
      price: String,
      summary: String,
      image: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Listing = mongoose.model("listing", schema);
  return Listing;
};