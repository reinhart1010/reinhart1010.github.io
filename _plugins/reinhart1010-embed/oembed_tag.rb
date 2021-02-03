class OEmbedTag < Liquid::Tag
  def initialize(tagName, input, tokens)
    super
    @input = input
  end

  def getData(url)

  end

  def render(context)
    output = '<div class="card my-10 mx-0 p-0">'


    output += '</div>'
    return output
  end
end