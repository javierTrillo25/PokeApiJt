import { current } from "@reduxjs/toolkit"

export const paginationLogic = (currentPage, pokemonsFilter) => {
    const pokemonsPerPage = 10

    let pokemonsInPage = []
    const sliceStart = (currentPage -1) * pokemonsPerPage
    const sliceEnd = currentPage * pokemonsPerPage
    pokemonsInPage = pokemonsFilter.slice(sliceStart, sliceEnd)

    const arrayPgs =[]
    const quantyPgs = Math.ceil(pokemonsFilter.length / pokemonsPerPage)
    for(let i=1 ; i<= quantyPgs ;i++){
        arrayPgs.push(i)
    }
    const lastpg= arrayPgs[arrayPgs.length - 1]

    let pgInBlock = []
    const pgPerBlock = 5
    let actBlock =1
    for(let currentBlock = 1; currentBlock * pgPerBlock < currentPage; currentBlock++){
    actBlock = currentBlock + 1
    }

    const minPg= actBlock * pgPerBlock - pgPerBlock
    for (let currentPageInBlock = actBlock * pgPerBlock; currentPageInBlock> minPg;currentPageInBlock--){
        if(currentPageInBlock <=lastpg){
            pgInBlock.unshift(currentPageInBlock)
        }
    }
    return{pgInBlock, lastpg, pokemonsInPage}
}