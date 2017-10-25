function bookLookUp(AmazonService){
  this.searchService = AmazonService
  this.search = (ispn) => {
    var bookDetail = AmazonService(ispn)
    return {
      bookName: bookDetail.bookName,
      cover: bookDetail.cover,
      ispn: "0000000000000"

    }
  }

}


test('Book look up', () => {
  //Arrange
  const MockAmazonService = jest.fn().mockReturnValue({
    bookName: 'Harry Potter',
    cover: 'bookCover.jpg',
    ispn: '1001234567890'
  })
  var app = new bookLookUp(MockAmazonService)

  //Act
  var ispn = "1001234567890"
  var result = app.search(ispn)
  //Assert
  expect(MockAmazonService).toHaveBeenCalled()
  expect(MockAmazonService).toHaveBeenCalledWith(ispn)
  expect(result).toHaveProperty('bookName')
  expect(result).toHaveProperty('cover')
  expect(result).toHaveProperty('ispn')
  expect(result.bookName).toBe('Harry Potter')
  expect(result.cover).toBe('bookCover.jpg')


})
