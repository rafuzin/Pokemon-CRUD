import { pokemonRepository } from "../repositories/Pokemon.repositories.js";

class PokemonsService {
    async getall() {
        return pokemonRepository.getAll()
    }

    async getById(id) {
        return pokemonRepository.getById(id)
    }

    async create(dados) {
        return pokemonRepository.create(dados)
    }

    async update(id) {

        return pokemonRepository.update(id)
    }

    async delete(id) {

        return pokemonRepository.delete(id)
    }
}

export const pokemonsServices = new PokemonsService();