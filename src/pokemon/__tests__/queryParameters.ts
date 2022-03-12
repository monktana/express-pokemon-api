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
      expect((<WrongParameterError>error).message).toBe("Recieved value 'a' for parameter 'limit' is invalid because: not an positive integer")
    }
  });

  it(`recieves error for an alphabetical start value`, async () => {
    expect.assertions(1);

    try {
      const query = qs.parse("start=a")
      new QueryParameters(query)
    } catch (error) {
      expect((<WrongParameterError>error).message).toBe("Recieved value 'a' for parameter 'start' is invalid because: not an positive integer")
    }
  });

  it(`recieves error for a negative limit value`, async () => {
    expect.assertions(1);

    try {
      const query = qs.parse("limit=-5")
      new QueryParameters(query)
    } catch (error) {
      expect((<WrongParameterError>error).message).toBe("Recieved value '-5' for parameter 'limit' is invalid because: not an positive integer")
    }
  });

  it(`recieves error for a negative start value`, async () => {
    expect.assertions(1);

    try {
      const query = qs.parse("start=-5")
      new QueryParameters(query)
    } catch (error) {
      expect((<WrongParameterError>error).message).toBe("Recieved value '-5' for parameter 'start' is invalid because: not an positive integer")
    }
  });

  it(`recieves error for a decimal limit value`, async () => {
    expect.assertions(2);

    try {
      const query = qs.parse("limit=1.5")
      new QueryParameters(query)
    } catch (error) {
      expect((<WrongParameterError>error).message).toBe("Recieved value '1.5' for parameter 'limit' is invalid because: not an positive integer")
    }

    try {
      const query = qs.parse("limit=1,5")
      new QueryParameters(query)
    } catch (error) {
      expect((<WrongParameterError>error).message).toBe("Recieved value '1,5' for parameter 'limit' is invalid because: not an positive integer")
    }
  });

  it(`recieves error for a decimal start value`, async () => {
    expect.assertions(2);

    try {
      const query = qs.parse("start=1.5")
      new QueryParameters(query)
    } catch (error) {
      expect((<WrongParameterError>error).message).toBe("Recieved value '1.5' for parameter 'start' is invalid because: not an positive integer")
    }

    try {
      const query = qs.parse("start=1,5")
      new QueryParameters(query)
    } catch (error) {
      expect((<WrongParameterError>error).message).toBe("Recieved value '1,5' for parameter 'start' is invalid because: not an positive integer")
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

    it('recieves an error for purely numerical value', async () => {
      expect.assertions(1);
      try {
        const query = qs.parse("name=3")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Recieved value '3' for parameter 'name' is invalid because: a comma seperated list of strings")
      }
    });
    
    it('recieves an error for multiple names', async () => {
      expect.assertions(3);

      try {
        const query = qs.parse("name=bulbasaur,ivysaur")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Recieved value 'bulbasaur,ivysaur' for parameter 'name' is invalid because: a comma seperated list of strings")
      }

      try {
        const query = qs.parse("name=bulbasaur&name=ivysaur")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Recieved value 'bulbasaur,ivysaur' for parameter 'name' is invalid because: multiple values")
      }

      try {
        const query = qs.parse("name[]=bulbasaur")
        new QueryParameters(query)
      } catch (error) {
        expect((<WrongParameterError>error).message).toBe("Recieved value 'bulbasaur' for parameter 'name' is invalid because: multiple values")
      }
    });
  })
})