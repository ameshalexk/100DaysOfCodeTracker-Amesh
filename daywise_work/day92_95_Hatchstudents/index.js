Object.defineProperty(clone, 'foo', {
              value: final.map((e) => {
                if (e[1] === (parseInt(clone.id)-1)) {
                  return (e[0].toString().toLowerCase())
                }
             })
            })