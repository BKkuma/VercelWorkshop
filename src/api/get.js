const data_shop = require('../data/shop.json')
const weapon_stat = require('../data/weapon_stat.json')
const book_spell_stat = require('../data/book_spell_stat.json')
const wand_stat = require('../data/wand_stat.json')

function get( req )
{
   let result = JSON.stringify( { message:"API not found" } )
    
    
    if( req.url === '/api/weapon_stat'){
        return  JSON.stringify( weapon_stat )
    }
    

    if( req.url === '/api/book_spell_stat'){
        return JSON.stringify( book_spell_stat )
    }
    

    if( req.url === '/api/wand_stat'){
        return JSON.stringify( wand_stat )
    }

    
    if( req.url === '/api/shop'){
        return JSON.stringify( data_shop )   
    }   
    return  result
}

module.exports = get