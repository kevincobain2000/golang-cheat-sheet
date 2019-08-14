interface FuzeOptions {
  keys: [
    {
      name: string;
      weight: number;
    },
    {
      name: string;
      weight: number;
    },
    {
      name: string;
      weight: number;
    },
    {
      name: string;
      weight: number;
    }
  ];
}
const FuzeOptions: FuzeOptions = {
  keys: [
    {
      name: "title",
      weight: 0.2
    },
    {
      name: "subtitle",
      weight: 0.3
    },
    {
      name: "subsubtitle",
      weight: 0.3
    },
    {
      name: "raw",
      weight: 0.2
    }
  ]
};
export default FuzeOptions;
