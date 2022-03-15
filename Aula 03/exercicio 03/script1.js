console.log ("=== Exercicio 3 - 01 ===")

// Faça uma classe Perfil que tem as seguintes informações: nome, avatar (foto de perfil) e tema. 
// Utilize acessors (get/set) para garantir que o tema só pode ser "light" ou "dark" e que a foto de 
// perfil deve ser uma url (iniciada com http ou https).

class perfil {
    constructor (nome, avatar, tema) {
    this.nome = nome;
    this.avatar = avatar;
    this.tema = tema
    }
    
    set temaVerif(temaX) {
        if (temaX === "Dark" || temaX === "Light") {
            return this.tema = temaX 
        } else {
            return "O tema precisa ser Dark ou Light"
        }
    }

    set fotoP (fotoX) {
        if (fotoX === URL) {
            return this.avatar = fotoX
        } else {
            return "O Avatar precisa ser uma URL"
        }
    }
    
    get perfilX () {
        return this.nome + this.tema + this.avatar
    }
}