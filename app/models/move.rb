class Move < ApplicationRecord

  CHESS_BOARD = [
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""]
  ]

  CHESS_BOARD = [
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""]
  ]

  def valid_move?(move)
    [id: number, position: ??, ]
    # sudo code
    case move.piece
    when "BlPawn"
      blpawn_moves(move)
    when "WhPawn"
      whpawn_moves(move)
    when "BlBishop" || "WhBishop"
      bishop_moves(move)
    when "BlKnight" || "WhKnight"
      knight_moves(move)
    when "BlRook" || "WhRook"
      rook_moves(move)
    when "BlQueen" || "WhQueen"
      queen_moves(move)
    when "BlKing" || "WhKing"
      king_moves(move)
    else
      flash[:message] = "Do you even chess, bro? Try again! D:<"
    end
  end


  def blpawn_moves(move)
    # home-position: y-index + 1 || y-index + 2 to move
    #
    # (x-index - 1 || x-index + 1) && (y-index + 1) for capture/check
  end

  def whpawn_moves(move)
    # y-index - 1 || y-index - 2 to move
    # (x-index - 1 || x-index + 1) && (y-index - 1) for capture/check
  end

  def bishop_moves(move)
    # y and x indices change by same real integer (change == |int|) for move and capture/check
  end

  def knight_moves(move)
    # ((x-index +/- 1) || (y-index +/- 2)) || ((x-index +/- 2) || (y-index +/- 1)) for move and capture/check
  end

  def rook_moves(move)
    # ((x-index +/- int) && (y-index +/- 0)) || ((x-index +/- 0) || (y-index +/- int)) for move and capture/check
  end

  def queen_moves(move)
    # bishop_moves(move) || rook_moves(move)
  end

  def king_moves(move)
    # 
  end

  def check?(updated_move)
  end

  def checkmate?(updated_move)
  end
end
