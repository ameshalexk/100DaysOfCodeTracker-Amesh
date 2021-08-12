export const Default = () => {

  const [selectedRow, setSelectedRow] = useState(undefined) as any;
  const [sortedArray, setSortedArray] = useState(ASC) as any;
  const [direction, setDirection] = useState(BOTH) as any;
  const [selected, setSelected] = useState() as any;

  function sorter(arry: string[][], i: number) {
    if (sortedArray === ASC) {
      return arry.sort(function (a: string[], b: string[]) { return a[i] > b[i] ? 1 : -1; });

    } else {
      return arry.sort(function (a: string[], b: string[]) { return a[i] > b[i] ? 1 : -1; }).reverse();

    }
  }


  return (<Template>
    <TableRow >
      {
        tableHeaders.map((item, idx) => {

          if (item === Notes) {
            return <TableCellHeader>{item}</TableCellHeader>
          } else {
            return <TableCellHeader selection={selected} sortable={true} idx={idx} sortDirection={direction} onClick={() => {
              sorter(arr, idx)
              setSelected(idx);
              if (sortedArray === ASC) {
                setSortedArray(DES)
                setDirection(DOWN)
              } else {
                setSortedArray(ASC)
                setDirection(UP)
              }
            }}>{item}</TableCellHeader>
          }

        })
      }
    </TableRow>
    {
      arr.map((item, idx) => {
        if (selectedRow === undefined) {
          return <TableRow onClick={() => {
            return setSelectedRow(idx)
          }}
          > {item.map((i, x) => {
            if (x < 5) {
              return <TableCell>{i}</TableCell>
            } else {
              return <TableCell editable>{i}</TableCell>
            }
          })}  </TableRow>
        } else if (selectedRow === idx) {
          return <TableRow selected onClick={() => {
            return setSelectedRow(idx)
          }}
          > {item.map((i, x) => {
            if (x < 5) {
              return <TableCell>{i}</TableCell>
            } else {
              return <TableCell editable>{i}</TableCell>
            }
          })}  </TableRow>
        } else {
          return <TableRow onClick={() => {
            return setSelectedRow(idx)
          }}
          > {item.map((i, x) => {
            if (x < 5) {
              return <TableCell>{i}</TableCell>
            } else {
              return <TableCell editable>{i}</TableCell>
            }
          })}  </TableRow>
        }
      })
    }
  </Template >)
};

