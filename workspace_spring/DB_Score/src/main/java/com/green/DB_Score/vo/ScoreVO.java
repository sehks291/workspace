package com.green.DB_Score.vo;

public class ScoreVO {
    private int stuNum;
    private String stuName;
    private int korScore;
    private int engScore;
    private String intro;

    public int getStuNum() {
        return stuNum;
    }

    public void setStuNum(int stuNum) {
        this.stuNum = stuNum;
    }

    public String getStuName() {
        return stuName;
    }

    public void setStuName(String stuName) {
        this.stuName = stuName;
    }

    public int getKorScore() {
        return korScore;
    }

    public void setKorScore(int korScore) {
        this.korScore = korScore;
    }

    public int getEngScore() {
        return engScore;
    }

    public void setEngScore(int engScore) {
        this.engScore = engScore;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    @Override
    public String toString() {
        return "ScoreVO{" +
                "stuNum=" + stuNum +
                ", stuName='" + stuName + '\'' +
                ", korScore=" + korScore +
                ", engScore=" + engScore +
                ", intro='" + intro + '\'' +
                '}';
    }
}
