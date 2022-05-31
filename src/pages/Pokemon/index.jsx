import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, selectPokemonList } from "./pokemonSlice";

export default function PokemonPage() {
  const dispatch = useDispatch();
  const { data, meta, isLoading } = useSelector(selectPokemonList);

  useEffect(() => {
    dispatch(getPokemon());
  }, []);

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          Tổng: {meta.total}
          {data.map((item) => (
            <div key={item.name}>
              <span>{item.name}</span>
            </div>
          ))}
        </>
      )}
    </>
  );
}
