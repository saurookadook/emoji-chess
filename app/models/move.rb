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

  def valid_move?(move)
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
    
  end

  def whpawn_moves(move)
    
  end

  def bishop_moves(move)
    
  end

  def knight_moves(move)
    
  end

  def rook_moves(move)
    
  end

  def queen_moves(move)
    
  end

  def king_moves(move)
    
  end
end
