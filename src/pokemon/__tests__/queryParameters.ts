import qs from "qs";
import { QueryParameters, QUERYDEFAULTS } from "../queryParameters";
import { WrongParameterError } from "../../validation/types/parameters/error";

describe("general", () => {
  it('uses default values when query is empty', async () => {
    const query = qs.parse("")
    const parameters = new QueryParameters(query)

    expect(parameters.start).toBe(QUERYDEFAULTS.START)
    expect(parameters.limit).toBe(QUERYDEFAULTS.LIMIT)
    expect(parameters.name).toBeUndefined()
    expect(parameters.types).toBeUndefined()
    expect(parameters.ids).toBeUndefined()
  });

  it('throws an error of type WrongParameterError', async () => {
    expect.assertions(2);

    try {
      const query = qs.parse("start=-5")
      new QueryParameters(query)
    } catch (error) {
      expect(error).toBeInstanceOf(WrongParameterError)
    }

    try {
      const query = qs.parse("name=15")
      new QueryParameters(query)
    } catch (error) {
      expect(error).toBeInstanceOf(WrongParameterError)
    }
  });

})

describe("pagination", () => {
  it('sets limit according to query', async () => {
    const query = qs.parse("limit=5")
    const parameters = new QueryParameters(query)

    expect(parameters.limit).toBe(5);
  });

  it('sets start according to query', async () => {
    const query = qs.parse("start=5")
    const parameters = new QueryParameters(query)

    expect(parameters.start).toBe(5)
  });

  it(`recieves error for an alphabetical limit value`, async () => {
    expect.assertions(1);

    try {
      const query = qs.parse("limit=a")
      new QueryParameters(query)
    } catch (error) {
      expect((<WrongParameterError>error).message).toBe("Value of parameter 'limit' has to be: a positive integer")
    }
  });

  it(`recieves error for an alphabetical start value`, async () => {
    expect.assertions(1);

    try {
      const query = qs.parse("start=a")
      new QueryParameters(query)
    } catch (error) {
      expect((<WrongParameterError>error).message).toBe("Value of parameter 'start' has to be: a positive integer")
    }
  });

  it(`recieves error for a negative limit value`, async () => {
    expect.assertions(1);

    try {
      const query = qs.parse("limit=-5")
      new QueryParameters(query)
    } catch (error) {
      expect((<WrongParameterError>error).message).toBe("Value of parameter 'limit' has to be: a positive integer")
    }
  });

  it(`recieves error for a negative start value`, async () => {
    expect.assertions(1);

    try {
      const query = qs.parse("start=-5")
      new QueryParameters(query)
    } catch (error) {
      expect((<WrongParameterError>error).message).toBe("Value of parameter 'start' has to be: a positive integer")
    }
  });

  it(`recieves error for a decimal limit value`, async () => {
    expect.assertions(2);

    try {
      const query = qs.parse("limit=1.5")
      new QueryParameters(query)
    } catch (error) {
      expect((<WrongParameterError>error).message).toBe("Value of parameter 'limit' has to be: a positive integer")
    }

    try {
      const query = qs.parse("limit=1,5")
      new QueryParameters(query)
    } catch (error) {
      expect((<WrongParameterError>error).message).toBe("Value of parameter 'limit' has to be: a positive integer")
    }
  });

  it(`recieves error for a decimal start value`, async () => {
    expect.assertions(2);

    try {
      const query = qs.parse("start=1.5")
      new QueryParameters(query)
    } catch (error) {
      expect((<WrongParameterError>error).message).toBe("Value of parameter 'start' has to be: a positive integer")
    }

    try {
      const query = qs.parse("start=1,5")
      new QueryParameters(query)
    } catch (error) {
      expect((<WrongParameterError>error).message).toBe("Value of parameter 'start' has to be: a positive integer")
    }
  });
})

describe("filter", () => {
  describe("name", () => {
    it('sets name according to query', async () => {
      const query = qs.parse("name=bulbasaur")
      const parameters = new QueryParameters(query)
    
      expect(parameters.name).toBe('bulbasaur');
    });

    it('can handle the character - ', async () => {
      const query = qs.parse("name=mr-mime")
      const parameters = new QueryParameters(query)
    
      expect(parameters.name).toBe('mr-mime');
    });

    it('recieves an error for a numerical value', async () => {
      expect.assertions(1);

      try {
        const query = qs.parse("name=3")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'name' has to be: single alphabetical string")
      }
    });
    
    it('recieves an error for multiple names', async () => {
      expect.assertions(1);

      try {
        const query = qs.parse("name=bulbasaur,ivysaur")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'name' has to be: single alphabetical string")
      }
    });
    
    it('recieves an error if name parameter is an array', async () => {
      expect.assertions(3);

      try {
        const query = qs.parse("name=bulbasaur&name=ivysaur")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'name' has to be: single alphabetical string")
      }

      try {
        const query = qs.parse("name[]=bulbasaur")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'name' has to be: single alphabetical string")
      }

      try {
        const query = qs.parse("name[1]=bulbasaur")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'name' has to be: single alphabetical string")
      }
    });
    
    it('recieves an error if name parameter is an object', async () => {
      expect.assertions(5);

      try {
        const query = qs.parse("name[100]=bulbasaur")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'name' has to be: single alphabetical string")
      }

      try {
        const query = qs.parse("name[0][foo]=bulbasaur")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'name' has to be: single alphabetical string")
      }

      try {
        const query = qs.parse("name[]=bulbasaur&name[foo]=charmander")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'name' has to be: single alphabetical string")
      }

      try {
        const query = qs.parse("name[foo]=bulbasaur")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'name' has to be: single alphabetical string")
      }

      try {
        const query = qs.parse("name[foo][bar]=bulbasaur")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'name' has to be: single alphabetical string")
      }
    });
  });

  describe("ids", () => {
    it('sets ids according to query', async () => {
      const query = qs.parse("ids=1")
      const parameters = new QueryParameters(query)
    
      expect(parameters.ids).toStrictEqual([1]);
    });

    it('allows filtering by multiple ids', async () => {
      const query = qs.parse("ids=1,2,3")
      const parameters = new QueryParameters(query)
    
      expect(parameters.ids).toStrictEqual([1,2,3]);
    });
    
    it('recieves an error if ids contain a alphabetical value', async () => {
      expect.assertions(3);

      try {
        const query = qs.parse("ids=a")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'ids' has to be: a comma seperated list of integers")
      }

      try {
        const query = qs.parse("ids=true")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'ids' has to be: a comma seperated list of integers")
      }

      try {
        const query = qs.parse("ids=1,a")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'ids' has to be: a comma seperated list of integers")
      }
    });
    
    it('recieves an error if ids contain special characters apart from comma', async () => {
      expect.assertions(3);

      try {
        const query = qs.parse("ids=%A7")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'ids' has to be: a comma seperated list of integers")
      }

      try {
        const query = qs.parse("ids=[1,2]")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'ids' has to be: a comma seperated list of integers")
      }

      try {
        const query = qs.parse("ids=(1,2)")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'ids' has to be: a comma seperated list of integers")
      }
    });
    
    it('recieves an error if ids are not seperated by comma', async () => {
      expect.assertions(3);

      try {
        const query = qs.parse("ids=1.2")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'ids' has to be: a comma seperated list of integers")
      }

      try {
        const query = qs.parse("ids=1;2")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'ids' has to be: a comma seperated list of integers")
      }

      try {
        const query = qs.parse("ids=1|2")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'ids' has to be: a comma seperated list of integers")
      }
    });
    
    it('recieves an error if ids parameter is an array', async () => {
      expect.assertions(3);

      try {
        const query = qs.parse("ids=1&ids=2")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'ids' has to be: a comma seperated list of integers")
      }

      try {
        const query = qs.parse("ids[]=1")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'ids' has to be: a comma seperated list of integers")
      }

      try {
        const query = qs.parse("ids[0]=1")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'ids' has to be: a comma seperated list of integers")
      }
    });
    
    it('recieves an error if ids parameter is an object', async () => {
      expect.assertions(4);

      try {
        const query = qs.parse("ids[foo]=1")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'ids' has to be: a comma seperated list of integers")
      }

      try {
        const query = qs.parse("ids[][foo]=1")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'ids' has to be: a comma seperated list of integers")
      }

      try {
        const query = qs.parse("ids[100]=1")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'ids' has to be: a comma seperated list of integers")
      }

      try {
        const query = qs.parse("ids[]=1&ids[foo]=2")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'ids' has to be: a comma seperated list of integers")
      }
    });
  });

  describe("types", () => {
    it('sets types according to query', async () => {
      const query = qs.parse("types=normal")
      const parameters = new QueryParameters(query)
    
      expect(parameters.types).toStrictEqual(['normal']);
    });

    it('allows filtering by multiple types', async () => {
      const query = qs.parse("types=normal,ghost")
      const parameters = new QueryParameters(query)
    
      expect(parameters.types).toStrictEqual(['normal','ghost']);
    });
    
    it('recieves an error if types contain a numerical value', async () => {
      expect.assertions(2);

      try {
        const query = qs.parse("types=1")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'types' has to be: a comma seperated list of string")
      }

      try {
        const query = qs.parse("types=normal,1")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'types' has to be: a comma seperated list of string")
      }
    });
    
    it('recieves an error if types contain special characters apart from comma', async () => {
      expect.assertions(3);

      try {
        const query = qs.parse("types=%A7")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'types' has to be: a comma seperated list of string")
      }

      try {
        const query = qs.parse("types=[normal,ghost]")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'types' has to be: a comma seperated list of string")
      }

      try {
        const query = qs.parse("types=(normal,ghost)")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'types' has to be: a comma seperated list of string")
      }
    });
    
    it('recieves an error if types are not seperated by comma', async () => {
      expect.assertions(3);

      try {
        const query = qs.parse("types=normal.ghost")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'types' has to be: a comma seperated list of string")
      }

      try {
        const query = qs.parse("types=normal;ghost")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'types' has to be: a comma seperated list of string")
      }

      try {
        const query = qs.parse("types=normal|ghost")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'types' has to be: a comma seperated list of string")
      }
    });
    
    it('recieves an error if types parameter is an array', async () => {
      expect.assertions(3);

      try {
        const query = qs.parse("types=normal&types=ghost")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'types' has to be: a comma seperated list of string")
      }

      try {
        const query = qs.parse("types[]=normal")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'types' has to be: a comma seperated list of string")
      }

      try {
        const query = qs.parse("types[0]=normal")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'types' has to be: a comma seperated list of string")
      }
    });
    
    it('recieves an error if types parameter is an object', async () => {
      expect.assertions(4);

      try {
        const query = qs.parse("types[foo]=normal")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'types' has to be: a comma seperated list of string")
      }

      try {
        const query = qs.parse("types[][foo]=normal")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'types' has to be: a comma seperated list of string")
      }

      try {
        const query = qs.parse("types[100]=normal")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'types' has to be: a comma seperated list of string")
      }

      try {
        const query = qs.parse("types[]=normal&types[foo]=ghost")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Value of parameter 'types' has to be: a comma seperated list of string")
      }
    });
  })
})